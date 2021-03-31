// periodic-table-api-go
// https://github.com/neelpatel05/periodic-table-api-go
// https://periodic-table-api.herokuapp.com/atomicSymbol/H
const main = document.querySelector("main");

const honc = ["h", "o", "n", "c"];
const atoms = {};

// atom properties appear on screen
const displayAtoms = (atom) => {
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  main.appendChild(section);
  section.id = atoms[atom]["name"].toLowerCase();
  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(p1);
  section.appendChild(p2);
  h2.textContent = atom.symbol;
  console.log(atoms[atom]);
  p.textContent = atoms[atom]["symbol"];
  p1.textContent = atoms[atom]["cpkHexColor"];
  p2.textContent = atoms[atom]["name"];
};

// cycle through atom array
const createAtomObj = () => {
  honc.forEach((atom) => {
    getAtoms(atom);
  });
};


// save atoms to object
const getAtoms = async (atom) => {
  let atomicSymbol = atom.toUpperCase();

  try {
    const res = await axios.get(
      `https://periodic-table-api.herokuapp.com/atomicSymbol/${atomicSymbol}`
    );
    atoms[atom] = res.data;
    displayAtoms(atom);
  } catch (err) {
    console.log("oh no! something is really wrong.");
  }
};

createAtomObj();

// pixels into percentage
// 100% = 16px
