// domain
import MeetupList from "../components/meetups/MeetupList";
const DD = [
  {
    id: "m1",
    title: "First",
    image:
      "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
    address: "egypt",
    description: "f-m",
  },
  {
    id: "m2",
    title: "second",
    image:
      "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
    address: "moroco",
    description: "s-m",
  },
];

const HomgPage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};


export async function getStaticProps() {
  return {
    props: {
      meetups: DD
    }
  }
}

export default HomgPage;
