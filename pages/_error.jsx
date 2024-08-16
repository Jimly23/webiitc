import * as Sentry from "@sentry/nextjs";
import ErrorPage from "@/components/pagetemplate/ErrorPage";

function CustomErrorComponent({ statusCode, message }) {
  if (statusCode >= 500) {
    Sentry.captureMessage(
      `Server error occurred with status code ${statusCode}`,
      "error"
    );
  }

  return <ErrorPage statusCode={statusCode} message={message} />;
}

CustomErrorComponent.getInitialProps = async (contextData) => {
  const { res, err, asPath } = contextData;
  const statusCode = res ? res.statusCode : err.statusCode;

  if (err) {
    Sentry.captureException(err, {
      contexts: {
        page: {
          url: asPath, // Capture the URL where the error occurred
        },
      },
    });

    // Ensure Sentry sends the error before continuing
    await Sentry.flush(2000);
  }

  // Custom error message
  const message = err ? err.message : `An error ${statusCode} occurred`;

  return { statusCode, message };
};

export default CustomErrorComponent;
