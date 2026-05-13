import React, { useState } from "react";
import logo from "../assets/logo.png";

const LoginPage: React.FC = () => {
  const [pseudo, setPseudo] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentative de connexion:", { pseudo, accessKey });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gondor-bg">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-white p-3 inline-flex items-center justify-center">
            <img
              src={logo}
              alt="Gondor Chic Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
        <h1
          className="font-serif text-5xl font-bold tracking-wide"
          style={{ color: "var(--gondor-title)" }}
        >
          Gondor Chic
        </h1>
      </div>

      <div className="w-full max-w-lg bg-white shadow-md overflow-hidden">
        <div
          className="h-1.5 w-full shrink-0"
          style={{ background: "var(--gondor-accent-bar)" }}
        />
        <div className="p-10">
          <h2
            className="font-serif text-3xl font-normal text-center mb-8"
            style={{ color: "var(--gondor-dark)", lineHeight: "1.2" }}
          >
            Vérification
            <br />
            d'Identité
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block text-xs font-medium mb-2 uppercase tracking-widest"
                style={{ color: "var(--gondor-label)" }}
              >
                Pseudo
              </label>
              <input
                type="text"
                value={pseudo}
                placeholder="gollum01"
                onChange={(e) => setPseudo(e.target.value)}
                className="w-full px-4 py-3 border bg-white transition-all duration-200 rounded-none"
                style={{
                  borderColor: "var(--gondor-border)",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-xs font-medium mb-2 uppercase tracking-widest"
                style={{ color: "var(--gondor-label)" }}
              >
                Clé d'Accès
              </label>
              <input
                type="password"
                value={accessKey}
                placeholder="....."
                onChange={(e) => setAccessKey(e.target.value)}
                className="w-full px-4 py-3 border bg-white transition-all duration-200 rounded-none"
                style={{
                  borderColor: "var(--gondor-border)",
                  fontSize: "1rem",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full font-normal py-3 px-4 mb-6 transition-all duration-200 hover:opacity-90 text-white uppercase tracking-wide rounded-none"
              style={{
                background: "var(--gondor-button)",
                fontSize: "1rem",
              }}
            >
              S'identifier
            </button>
          </form>

          <p className="text-center text-sm">
            <a
              href="#"
              className="italic underline-offset-2 hover:underline"
              style={{ color: "var(--gondor-accent-bar)" }}
            >
              mot de passe oublié ?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
