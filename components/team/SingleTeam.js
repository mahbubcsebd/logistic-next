import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/team.module.scss";

const SingleTeam = ({ id, name, img, post }) => {
  return (
    <div className={`${classes.singleTeam}`}>
      <Link href="#" className={`${classes.teamImg}`}>
        <Image src={img} alt="team" />
      </Link>
      <div className={`${classes.teamContent}`}>
        <Link href="#" className={`${classes.teamName}`}>
          {name}
        </Link>
        <p className={`${classes.teamText}`}>{post}</p>
      </div>
    </div>
  );
};

export default SingleTeam;