// domain/someID
import MeetupDetail from "../components/meetups/MeetupsDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      img={props.meetup.image}
      titel={props.meetup.title}
      address={"nigga nogga nagga"}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      }
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetup: {
        image:
          "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
        id: meetupId,
        title: "nigga nigga nigga",
        address: "nigga nogga nagga",
      },
    },
  };
}

export default MeetupDetails;
