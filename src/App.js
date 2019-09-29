import React, { useState } from 'react';
import { withAuthenticator } from 'aws-amplify-react'

function App() {
  const aa = {
    notes: [
      {
        id: 1,
        note: "Hello world"
      }
    ]
  }

  const val = (aa) => {
    return (
      <div>
        {aa.notes.map(i => {

        })}
      </div>
    )
  }

  return (
    <div className="flex flex-column  items-center justify-center pa3 bg-washed-red">
      <h1  className="code f2-1">
        Amplify Notetaker
      </h1>
      <form className="mb3">
        <input
          type="text"
          className="pa2 f4"
          placeholder="Write your note"
        />
        <button className="pa2 f4" type="submit">
          Add Note
        </button>
      </form>
      <div>
        {aa.notes.map(item => {
          return (
            <div
              key={item.id}
              className="flex items-center"
            >
              <li className="list pal f3">
                {item.note}
              </li>
              <button
                className="bg-transparent bn f3"
              >
                <span>&times;</span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

// ID: emw08862@bcaoo.com
// PW: emw08862@bcaoo.com  

export default withAuthenticator(App, {
  includeGreetings: true, // logout
  // authenticatorComponents: [MyComponents],
});
