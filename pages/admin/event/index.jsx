import React, { useState } from "react";
import GetEvent from "@/api/admin/event/GetEvent";
import CreateAcara from "@/api/admin/event/CreateAcara";
import ActivateEvent from "@/api/admin/event/ActivateEvent";
import UpdateEvent from "@/api/admin/event/UpdateEvent";
import DeleteEvent from "@/api/admin/event/DeleteEvent";
import DashboardAdminTemplate from "@/components/pagetemplate/DashboardAdmin";
import DashboardCard from "@/components/atoms/DashboardCard";
import CardSelect from "@/components/molecules/CardSelect";
import ModalSelectEvent from "@/components/molecules/ModalSelectEvent";
import Alert from "@/components/atoms/Alert";

const Event = ({ initialEvents }) => {
  const [events, setEvents] = useState(initialEvents || []);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newEventName, setNewEventName] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [editEventId, setEditEventId] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [activeEventId, setActiveEventId] = useState(null);

  const showAlert = (message) => {
    setAlertMessage(message);
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 3000);
  };

  const handleCreateEvent = async () => {
    if (!newEventName || !newEventDescription) {
      showAlert("Nama dan Deskripsi acara wajib diisi");
      return;
    }

    try {
      const response = await CreateAcara({
        name: newEventName,
        description: newEventDescription,
      });

      if (response.success) {
        showAlert(`Event "${newEventName}" telah dibuat`);
        setShowCreateModal(false);
        const { events } = await GetEvent();
        setEvents(events || []);
      } else {
        showAlert(`Error: ${response.message || "Gagal membuat event"}`);
      }
    } catch (error) {
      showAlert("Terjadi kesalahan saat membuat event");
    }
  };

  const handleEditEvent = (id, name, description) => {
    setEditEventId(id);
    setNewEventName(name);
    setNewEventDescription(description);
    setShowEditModal(true);
  };

  const handleUpdateEvent = async () => {
    try {
      const response = await UpdateEvent({
        id: editEventId,
        name: newEventName,
        description: newEventDescription,
      });

      if (response.success) {
        showAlert(`Event "${newEventName}" telah diperbarui`);
        setShowEditModal(false);
        const { events } = await GetEvent();
        setEvents(events || []);
      } else {
        showAlert(`Error: ${response.message || "Gagal memperbarui event"}`);
      }
    } catch (error) {
      showAlert("Terjadi kesalahan saat memperbarui event");
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await DeleteEvent({ id });

      if (response.success) {
        showAlert("Event telah dihapus");
        const { events } = await GetEvent();
        setEvents(events || []);
      } else {
        showAlert(`Error: ${response.message || "Gagal menghapus event"}`);
      }
    } catch (error) {
      showAlert("Terjadi kesalahan saat menghapus event");
    }
  };

  const handleActivateEvent = async (id) => {
    try {
      const response = await ActivateEvent({ id });

      if (response.success) {
        showAlert("Event telah diaktifkan");
        const { events } = await GetEvent();
        setEvents(events || []);
        setActiveEventId(id);
      } else {
        showAlert(`Error: ${response.message || "Gagal mengaktifkan event"}`);
      }
    } catch (error) {
      showAlert("Terjadi kesalahan saat mengaktifkan event");
    }
  };

  const openCreateModal = () => {
    setNewEventName("");
    setNewEventDescription("");
    setShowCreateModal(true);
  };

  return (
    <DashboardAdminTemplate title="Events">
      <DashboardCard>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Daftar Acara</h1>
          <button
            onClick={openCreateModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Buat Event
          </button>
        </div>
        <div className="grid gap-4 mt-4">
          {events.length > 0 ? (
            events.map((event) => (
              <CardSelect
                key={event?.id}
                id={event?.id}
                name={event?.name}
                description={event?.description}
                onEdit={() =>
                  handleEditEvent(event.id, event.name, event.description)
                } // Edit event
                onDelete={() => handleDeleteEvent(event.id)} // Delete event
                onActivate={() => handleActivateEvent(event.id)}
                isActive={event?.id === activeEventId}
                onRadioChange={() => handleActivateEvent(event.id)}
              />
            ))
          ) : (
            <div className="text-center">Tidak ada acara terdaftar</div>
          )}
        </div>
      </DashboardCard>

      {showCreateModal && (
        <ModalSelectEvent
          title="Buat Event Baru"
          onClose={() => setShowCreateModal(false)}
          onConfirm={handleCreateEvent}
        >
          <input
            type="text"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
            placeholder="Nama Event"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            value={newEventDescription}
            onChange={(e) => setNewEventDescription(e.target.value)}
            placeholder="Deskripsi Event"
            className="w-full border px-3 py-2 rounded mt-2"
            required
          />
        </ModalSelectEvent>
      )}

      {showEditModal && (
        <ModalSelectEvent
          title="Edit Event"
          onClose={() => setShowEditModal(false)}
          onConfirm={handleUpdateEvent}
        >
          <input
            type="text"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
            placeholder="Nama Event"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            value={newEventDescription}
            onChange={(e) => setNewEventDescription(e.target.value)}
            placeholder="Deskripsi Event"
            className="w-full border px-3 py-2 rounded mt-2"
            required
          />
        </ModalSelectEvent>
      )}

      <Alert isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)}>
        <span>{alertMessage}</span>
      </Alert>
    </DashboardAdminTemplate>
  );
};

export const getServerSideProps = async () => {
  const { events, error } = await GetEvent();

  if (error) {
    return {
      props: {
        initialEvents: [],
      },
    };
  }

  return {
    props: {
      initialEvents: events || [],
    },
  };
};

export default Event;
