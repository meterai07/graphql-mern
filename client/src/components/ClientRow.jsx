import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache) {
      cache.modify({
        fields: {
          clients(existingClients, { readField }) {
            return existingClients.filter(
              (clientRef) => client.id !== readField("id", clientRef)
            );
          },
        },
      });
    }
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrash />
        </button>
      </td>
    </tr>
  );
}
