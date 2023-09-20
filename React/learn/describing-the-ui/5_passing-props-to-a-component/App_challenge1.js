import { getImageUrl } from './utils.js';

function Profile({person, size, career}){
    return(
        <>
            <section className="profile">
                <h2>{person.name}</h2>
                <Avatar
                    name={person.name}
                    imageId={person.imageId}
                    size={size}
                />
                <Career
                    profession={career.profession}
                    awards={career.awards}
                    discoverd={career.discoverd}
                />
            </section>
        </>
    );
}

function Avatar({name, imageId, size}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(imageId)}
            alt={name}
            width={size}
            height={size}
        />
    );
}

function Career({profession, awards, discoverd}){
    return (
        <ul>
            <li>
                <b>Profession: </b>
                {profession}
            </li>
            <li>
                <b>Awards: {awards.count} </b>
                ({awards.content})
            </li>
            <li>
                <b>Discoverd: </b>
                {discoverd}
            </li>
        </ul>
    );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
            name:'Maria Skłodowska-Curie',
            imageId:'szV5sdG',
        }}
        size={70}
        career={{
            profession:'physicist and chemist',
            awards:{count: '4', content:'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'},
            discoverd:'polonium (element)'
        }}
      />
      <Profile
        person={{
            name:'Katsuko Saruhashi',
            imageId:'YfeOqp2',
        }}
        size={70}
        career={{
            profession:'geochemist',
            awards:{count: '2', content:'Miyake Prize for geochemistry, Tanaka Prize'},
            discoverd:' a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  );
}
