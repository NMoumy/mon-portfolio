import React from 'react';

export default function Superposition() {
  return (
    <div className="Superposition">
      <div className="desc-projet">
        <button className="btn-quitter">X</button>
        <h2>Titre</h2>
        <div className="media-projet">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/u5W2NWItytc?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO"
            title="HTML/CSS #1 - introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="description">
          <h3>description</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic.
          </p>
        </div>
        <div className="lien">
          <div className="liste-lien">
            <button>github</button> <button>projet</button>
          </div>
        </div>
      </div>
    </div>
  );
}
