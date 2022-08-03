import React from "react";

export const PostData = [
    {
      id: 1,
      author: {
        avatarUrl: "https://source.unsplash.com/random/400×400/?dogs",
        name: "Mathews Araujo",
        occupation: "Web Dev"
      },
      content: [
        {type: "paragraph", content: "Fala galeraa 👋"},
        {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: "link", content: "jane.design/doctorcare"}
      ],
      puplishAt: new Date('2022-08-02 22:11:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://source.unsplash.com/random/400×400/?koala",
        name: "Carlitos Medeiros",
        occupation: "Devops"
      },
      content: [
        {type: "paragraph", content: "Eaeee, pessoal 👋"},
        {type: "paragraph", content: "Finalizei aqui mais um projeto utilizando React. Dessa vez é sobre um projeto de rede social, com posts e comentário. Coisa básicoa, mas é pra decolar! 🚀"},
        {type: "link", content: "koala.dev/koala-social"}
      ],
      puplishAt: new Date('2022-08-01 20:11:00')
    }
  ]