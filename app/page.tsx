"use client";

import { useState } from "react";
import {
  Button,
  Htag,
  P,
  Rating,
  Tag,
} from "./components";

export default function Home() {
  const [rating, setRating] = useState(4);
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"}>
        Кнопка
      </Button>
      <Button appearance={"ghost"} arrow="right">
        Кнопка
      </Button>
      <P size="s">Маленький текст</P>
      <P>Средний текст</P>
      <P size="l">Большой текст</P>
      <Tag color={"primary"}>Тег</Tag>
      <Tag size="m" color={"red"}>
        Тег
      </Tag>
      <Tag color={"green"}>Тег</Tag>
      <Tag color={"ghost"}>Тег</Tag>
      <Tag size="m" color={"grey"}>
        10
      </Tag>

      <Rating
        rating={rating}
        isEditable={true}
        setRating={setRating}
      />
    </div>
  );
}
