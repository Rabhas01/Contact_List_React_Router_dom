import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader ({ params }) {
  const contact = await getContact(params.contactId);
  return { contact }
}

export default function Contact() {
  const { contact } = useLoaderData();
  // const contact = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "data:image/jpeg;base64,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",
  //   facebook: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.facebook && (
          <p>
            <a
              target="_blank"
              href={`https://www.facebook.com/${contact.facebook}`}
            >
              {contact.facebook}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}