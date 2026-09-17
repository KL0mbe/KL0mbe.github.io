import { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";

type ComboResponse = {
  single: SingleCombo[];
  compositions: MultiCombo[];
};

type SingleCombo = {
  id: number;
  character: string;
  display_name: string;
  modify_shift: boolean;
  modify_opt_alt: boolean;
  modify_ctrl: boolean;
  modify_altgr: boolean;
};

type MultiCombo = {
  composition_id: number;
  layout_id: number;
  display_name: string;
  output_char: string;
  base_char: string;
  step: number;
  modify_shift: boolean;
  modify_opt_alt: boolean;
};

type Country = {
  id: number;
  country: string;
  native_name: string;
  iso_3166: string;
};

// Turn a set of modifier booleans into a short label like "⌥ + ⇧"
function mods(m: {
  modify_opt_alt?: boolean;
  modify_shift?: boolean;
  modify_ctrl?: boolean;
  modify_altgr?: boolean;
}) {
  const parts: string[] = [];
  if (m.modify_opt_alt) parts.push("⌥");
  if (m.modify_shift) parts.push("⇧");
  if (m.modify_ctrl) parts.push("⌃");
  if (m.modify_altgr) parts.push("AltGr");
  return parts;
}

function Keyboards() {
  const [char, setChar] = useState("");
  const [searchedChar, setSearchedChar] = useState("");
  const [country, setCountry] = useState("X");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [searched, setSearched] = useState(false);

  const [countries, setCountries] = useState<Country[]>([]);
  const [result, setResult] = useState<ComboResponse>({
    single: [],
    compositions: [],
  });

  useEffect(() => {
    async function loadCountries() {
      const response = await fetch("http://localhost:8080/countries");
      const data = await response.json();
      setCountries(data);
    }
    loadCountries();
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const updateChar = (newChar: React.ChangeEvent<HTMLInputElement>) =>
    setChar(newChar.target.value);

  const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCountry(e.target.value);

  async function getKeyCombo(char: string, country: string) {
    setSearchedChar(char);
    setSearchedCountry(country);
    setSearched(true);

    const request = await fetch(
      `http://localhost:8080/?char=${encodeURIComponent(char)}&country=${encodeURIComponent(country)}`,
    );
    const data = await request.json();
    setResult(data);
  }

  // Group flat composition step-rows into ordered sequences, keyed by composition.
  const compositionGroups = new Map<number, MultiCombo[]>();
  for (const row of result.compositions) {
    const list = compositionGroups.get(row.composition_id) ?? [];
    list.push(row);
    compositionGroups.set(row.composition_id, list);
  }
  for (const list of compositionGroups.values()) {
    list.sort((a, b) => a.step - b.step);
  }

  const nothingFound =
    searched && result.single.length === 0 && result.compositions.length === 0;

  return (
    <PageLayout
      title="Keyboard Layouts"
      quote="Fortuna may have her moments, but Virtue has it all"
    >
      <>
        <div className="flex flex-wrap items-end gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-textSecondary text-sm">Character</span>
            <input
              className="w-20 rounded border border-secondary bg-accent px-3 py-2 text-center text-lg outline-none focus:border-hover"
              maxLength={1}
              onChange={updateChar}
              value={char}
              type="text"
              placeholder="•"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-textSecondary text-sm">Layout</span>
            <select
              name="Layouts"
              onChange={handleCountry}
              value={country}
              className="rounded border border-secondary bg-accent px-3 py-2 outline-none focus:border-hover"
            >
              {countries.map((c) => (
                <option key={c.id} value={c.native_name}>
                  {c.native_name}
                </option>
              ))}
            </select>
          </label>

          <button
            className="rounded bg-hover px-4 py-2 font-medium text-primary transition hover:opacity-90 disabled:opacity-40"
            onClick={() => getKeyCombo(char, country)}
            disabled={!char || country === "X"}
          >
            Search
          </button>
        </div>

        {!searched && (
          <div className="mx-auto w-fit p-4 rounded mt-10 text-left bg-red-400">
            <p>
              Server is down for rewrites. You can check out the repo{" "}
              <a
                href="https://github.com/KL0mbe/Keyboard-Layouts"
                target="_blank"
                className="hover:text-hover
              underline"
              >
                here
              </a>
            </p>
          </div>
        )}
        {searched && (
          <p className="mt-10 text-textSecondary">
            Ways to type{" "}
            <span className="text-textPrimary">{searchedChar}</span> on{" "}
            <span className="text-textPrimary">{searchedCountry}</span>
          </p>
        )}

        {nothingFound && (
          <p className="mt-4 text-textSecondary">
            No way to type {searchedChar} on {searchedCountry}.
          </p>
        )}

        {searched && !nothingFound && (
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm uppercase text-textSecondary">
                Direct
              </h3>
              {result.single.length === 0 ? (
                <p className="text-textSecondary text-sm">None</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {result.single.map((row) => {
                    const m = mods(row);
                    return (
                      <>
                        <p>{row.display_name}</p>

                        <li
                          key={row.id}
                          className="rounded border border-secondary bg-accent px-4 py-3"
                        >
                          <span className="font-mono">
                            {m.length ? m.join(" + ") + " + " : ""}
                            {row.character}
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              )}
            </div>

            <div>
              <h3 className="mb-3 text-sm uppercase tracking-wide text-textSecondary">
                Dead-key sequence
              </h3>
              {compositionGroups.size === 0 ? (
                <p className="text-textSecondary text-sm">None</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {[...compositionGroups.entries()].map(([out, steps]) => (
                    <>
                      <p>{steps[0].display_name}</p>
                      <li
                        key={out}
                        className="rounded border border-secondary bg-accent px-4 py-3"
                      >
                        <span className="font-mono">
                          {steps.map((s, i) => {
                            const m = mods(s);
                            return (
                              <span key={s.layout_id}>
                                {i > 0 && (
                                  <span className="text-textSecondary">
                                    {" → "}
                                  </span>
                                )}
                                {m.length ? m.join(" + ") + " + " : ""}
                                {s.base_char}
                              </span>
                            );
                          })}
                        </span>
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </>
    </PageLayout>
  );
}

export default Keyboards;
