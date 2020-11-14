import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character[id-1].img}" alt="${character[id-1].name}">
        <h2>${character[id-1].name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Ubicación: <span>${character[id-1].location}</span></h3>
        <h3>Drops: <span>${character[id-1].drops}</span></h3>
      </article>
    </div>
  `;
  console.log(character);
  return view;
};

export default Character;