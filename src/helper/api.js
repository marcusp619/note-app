export const getAllNotes = async () => {
  const query = `
    query {
    listNotes {
      id,
      title,
      noteDescription,
      tag,
      addedAt
    }
  }`
  let response = await fetch('https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: query,
  });
  let result = await response.json();
  return result.data.listNotes
}

export const postNote = async (note) => {
  const query = `
  mutation {
    createNote (title: "${note.title}", noteDescription: "${note.noteDescription}", tag: "${note.tag}") {
      id,
      title,
      noteDescription,
      addedAt
    }
  }
  `
  let response = await fetch('https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: query,
  });

  let result = await response.json();
  // use moment.js moment(date1).format('YYYY/MM/D hh:mm:ss')
  return result.data.createNote
}

export const deleteNote = async (id) => {
  const query = `
  mutation {
    removeNote (id: "${id}")
  }`

  let response = await fetch('https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: query,
  });

  let result = await response.json();
}

export const filteredNotes = async (category) => {
  const query = `
  query{
    filterNotes(tag: "${category}")
      {id,
      tag,
      noteDescription,
      addedAt
      }
    }`
  let response = await fetch('https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: query,
  });
  let result = await response.json();
  return result.data.filterNotes
}

export const filteredDates = async (date) => {
  const query = `
  query{
    filterDates(addedAt: "${date}")
      {id,
      title,
      tag,
      noteDescription,
      addedAt
      }
    }`
  let response = await fetch('https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: query,
  });
  let result = await response.json();
  return result.data.filterDates
}