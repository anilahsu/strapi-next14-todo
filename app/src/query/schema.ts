// src/query/schema.ts
import { gql } from "@apollo/client";
export const GETQUERY = gql`
  {
    todos(sort: "id:desc") {
      data {
        id
        attributes {
          todoText
          createdAt
        }
      }
    }
  }
`;

export const GETQUERY2 = gql`
  query Todo($todoText: String) {
    todos(filters: {todoText: {eq: $todoText}}) {
      data {
        id
        attributes {
          todoText
          createdAt
        }
      }
    }
  }
`;

//-----------------mutations-------------------
export const ADDMUT = gql`
  mutation createTodo($todoText: String) {
    createTodo(data: { todoText: $todoText }) {
      data {
        id
        attributes {
          todoText
          createdAt
        }
      }
    }
  }
`;

//-----------------mutations-------------------
export const UPDATEMUT = gql`
  mutation updateTodo($id: ID!, $todoText: String!) {
    updateTodo(id: $id, data: { todoText: $todoText }) {
      data {
        id
        attributes {
          todoText
          createdAt
        }
      }
    }
  }
`;

//-----------------mutations-------------------
export const DELETEMUT = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      data {
        id
        attributes {
          todoText
          createdAt
        }
      }
    }
  }
`;