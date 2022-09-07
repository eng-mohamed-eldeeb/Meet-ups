import classes from './MeetupsDetail.module.css'
function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
          <img src={props.img} />
          <h1>{props.titel}</h1>
          <address>{props.address}</address>
        </section>
      );
}

export default MeetupDetail