import React, { useState, useEffect } from "react";
import GetEvent from "@/api/admin/event/getAll";
import DashboardCard from "@/components/atoms/DashboardCard";
import CardSelect from "@/components/molecules/CardSelect";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import activateEvent from "@/api/admin/event/setActive";
import ModalSelectEvent from "@/components/molecules/ModalSelectEvent";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  try {
    const events = await GetEvent();
    return {
      props: {
        initialEvents: events.data.events || [], // Rename props for clarity
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message || "Something went wrong",
      },
    };
  }
}

const Event = ({ initialEvents, error }) => {
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeEventId, setActiveEventId] = useState(null);
  const router = useRouter();

  const handleSelectEvent = (id, name) => {
    setSelectedEvent({ id, name });
    setShowModal(true);
  };

  const handleConfirmActivation = async () => {
    try {
      const response = await activateEvent({ id: selectedEvent.id });
      if (response.success) {
        alert(`Event ${selectedEvent.name} telah diaktifkan`);
        setShowModal(false);

        // Fetch the latest events data after activation
        const updatedEvents = await GetEvent();
        setEvents(updatedEvents.data.events || []);

        // Update active event ID
        setActiveEventId(selectedEvent.id);
      }
      setShowModal(false);
      router.reload();
    } catch (error) {
      alert("Terjadi kesalahan saat mengaktifkan event");
    }
  };
  useEffect(() => {
    const activeEvent = events?.find((event) => event?.isActive);
    if (activeEvent) {
      setSelectedEvent(activeEvent);
      setActiveEventId(activeEvent.id);
    }
  }, [events]);
  return (
    <div>
      <DashboardAdminTemplate title={"Events"}>
        <DashboardCard>
          <div className="grid gap-4">
            {error ? (
              <div>{error}</div>
            ) : events.length > 0 ? (
              events.map((event) => (
                <div key={event.id}>
                  <CardSelect
                    id={event.id}
                    name={event.name}
                    description={event.description}
                    onSelect={handleSelectEvent}
                    isSelected={activeEventId === event.id}
                  />
                </div>
              ))
            ) : (
              <DashboardCard>Tidak ada acara terdaftar</DashboardCard>
            )}
          </div>
        </DashboardCard>
      </DashboardAdminTemplate>

      {showModal && (
        <ModalSelectEvent
          title="Konfirmasi Aktivasi"
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmActivation}
        >
          <p>
            Apakah Anda yakin ingin mengaktifkan event "{selectedEvent.name}"?
          </p>
        </ModalSelectEvent>
      )}
    </div>
  );
};

export default Event;
