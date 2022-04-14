import * as React from "react";
import { useQueryClient } from "react-query";
import { useNotification } from "../hooks/notifications";
import { Table } from "../components/table/Table";

export const MeldingenTable: React.FC = () => {
  const queryClient = useQueryClient();

  const _useNotification = useNotification(queryClient);
  const getNotifications = _useNotification.getAll();

  return (
    <Table
      headers={["Title", "Description", "Date created"]}
      rows={
        getNotifications.data
          ? getNotifications.data.map((melding) => [
              melding.title,
              melding.description,
              new Date(melding["@dateCreated"]).toLocaleString("nl-NL"),
            ])
          : []
      }
    />
  );
};
