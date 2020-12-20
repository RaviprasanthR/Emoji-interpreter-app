import React from "react";
import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊":
    "Smiling Face : Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^.",
  "😀":
    "Grinning Face : The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text.",
  "😔":
    "Disappointed Face : Face is drooping and directed downwards. Smiley is very sad and frustrated and gives a disappointed impression. Represents sorrow, remorse and regret",
  "🙃":
    "Upside-down Face : Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke.",
  "❤️": "love",
  "😑":
    "annoyance : Face without any emotional expression, with closed eyes and mouth. Tired, annoyed, emotionless, no patience, the end of the flagpole is reached. The right words are missing to continue a conversation.",
  "🤪":
    "Crazy Face : Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke."
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>Know your Emojis</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"insert emoji here"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
