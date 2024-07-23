import classes from "./GameDetails.module.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AppContext } from "../../context/AppContext";

const GameDetails = () => {
  const { games } = useContext(AppContext);
  const [game, setGame] = useState({
    name: "",
    id: 0,
    description: "",
    types: [],
  });
  const { id } = useParams();

  const findGame = () => {
    const game = games.find((game) => game.id == id);
    setGame(game);
  };

  useEffect(() => {
    findGame();
  }, [games]);

  return (
    <div className={classes.game}>
      <Link to="/games-list">
        <FaArrowLeftLong />
        Go Back
      </Link>
      <div className={classes.gameHeader}>
        <img src="https://picsum.photos/800/300" alt={game?.name} />
        <div>
          <h1>{game?.name}</h1>
          <p>{game?.description}</p>
          <p className={classes.typeHeading}>Types: </p>
          <div className={classes.types}>
            {game?.types.map((type, index) => (
              <p key={index}>{type.game_type}</p>
            ))}
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
        similique quos voluptates recusandae distinctio expedita libero ipsa
        sequi. Quod sapiente modi illo ducimus iste facilis ullam vel eum
        explicabo, quia sequi molestiae atque voluptas aspernatur? Ipsum
        voluptates iste quod hic quam laborum tempore, omnis nihil quos qui
        consequuntur cupiditate doloremque maxime, tenetur itaque veritatis
        laudantium distinctio soluta vitae quis facilis eligendi sequi nemo
        temporibus! Quia, non ipsam? Nihil dolor natus repudiandae quaerat
        dolores, nesciunt sunt minima sint fugiat hic aliquid optio
        exercitationem vero consectetur molestias beatae, ratione illo.
        <br />
        <br />
        <br /> Iste eligendi ex incidunt facere nesciunt molestiae nemo
        repellendus, quis nam voluptate eum itaque voluptatibus quia nostrum
        quas! Dolorem vitae nam, obcaecati quibusdam explicabo facere
        perferendis omnis repellat voluptatibus, cum fugiat laboriosam quis ipsa
        quo incidunt nobis ipsam voluptates. Architecto dolor perspiciatis culpa
        animi, beatae saepe explicabo cupiditate et quis rem pariatur sunt
        praesentium quibusdam eligendi cumque aliquam consectetur ipsa qui
        fugit! Vitae dolorem officia, nobis nemo architecto, aliquid quibusdam
        dolorum animi dignissimos nam fugit maiores, porro fuga nihil similique
        sed illum esse et aut reprehenderit perspiciatis labore. Incidunt ipsa
        rem suscipit doloribus, architecto hic distinctio harum impedit
        voluptatibus aliquam porro consectetur sequi fugit ducimus doloremque.
        <br />
        <br />
        <br />
        Excepturi, exercitationem. Voluptas, error, dolor maiores eum ab
        deserunt provident perferendis animi cum nostrum laborum perspiciatis
        iusto mollitia rerum eligendi dignissimos, blanditiis recusandae
        delectus! A dolorem ullam ducimus iste quisquam perferendis debitis
        cumque consectetur soluta magnam excepturi et, tenetur iusto at illo
        officiis ab nobis placeat aspernatur nostrum atque dicta rerum
        obcaecati! Magni maxime totam harum aperiam voluptatibus, inventore
        ipsum iste accusantium tempora natus quae nam voluptas velit molestias
        earum neque minima. Doloremque eum delectus commodi, aperiam ad iusto
        mollitia obcaecati sit aliquid soluta sunt ratione sint veniam ea
        blanditiis exercitationem, nisi voluptas deleniti placeat. Accusamus
        recusandae praesentium ullam obcaecati consectetur, iste molestias quos
        nemo deserunt, eos tenetur voluptas soluta nesciunt reprehenderit
        deleniti adipisci, amet quisquam vel blanditiis et. Sed asperiores aut
        odio odit sit, at placeat, adipisci expedita quibusdam quos reiciendis
        earum officiis maxime omnis necessitatibus culpa mollitia modi pariatur
        dignissimos debitis nihil. Laborum a, veniam consequatur distinctio
        alias commodi repellat minima odit vel. Placeat, ex illum delectus nobis
        dolor accusamus hic officiis. Eum ratione dolore alias animi est
        corporis assumenda vero ab quod consectetur. Ipsum, aut. Dolorem
        consectetur pariatur incidunt nostrum quod illum, optio sapiente
        delectus, dolorum quibusdam ab accusantium! Quos, praesentium est
        architecto doloremque placeat nam molestiae aliquid illo ex commodi
        numquam non quam, iure quasi quia, asperiores laboriosam assumenda
        ratione suscipit nostrum consequatur sed quidem cumque? Modi, commodi
        aliquam, velit nobis voluptates impedit laborum magnam vitae debitis
        animi facilis perferendis. At esse minima quos in mollitia, numquam sed
        quibusdam, quam facere ipsum tempore. Corporis adipisci a laborum fugiat
        aliquid sed nam laboriosam ex ipsam mollitia cumque, cum voluptatem
        voluptate dignissimos est perspiciatis totam, voluptates fuga
        repellendus, aut nostrum laudantium esse iste. Cum ipsum at accusantium
        sapiente optio, quod rem laudantium quis pariatur possimus minus ad non
        mollitia amet. Qui voluptatem reprehenderit quaerat quibusdam in fugit
        laborum? Ullam, pariatur sunt vero vitae quos iure provident amet magni
        ut nulla! Rem quibusdam eius fugit, magni consequuntur doloribus sit
        tempora praesentium, quam nemo non natus sapiente minus. Quos,
        consectetur. Fugiat modi dolor vel eveniet cupiditate assumenda, facilis
        asperiores repudiandae velit, necessitatibus nihil temporibus aliquam
        tempora, minus exercitationem voluptates sint odio quasi explicabo iusto
        repellat in reprehenderit ipsa error? Quae dolores fuga voluptatem.
        <br />
        <br />
        <br /> Ex at recusandae vitae, aspernatur molestias qui repellendus eos,
        eveniet, fugiat obcaecati voluptatibus pariatur dolores possimus
        eligendi sit illum nemo nam! Maxime excepturi recusandae doloremque
        beatae dignissimos quam illo nobis rerum qui omnis enim, eos nam quidem
        quasi quae vitae. Dolores, fugit tenetur tempora modi eveniet
        praesentium fugiat sit autem assumenda, architecto quam? Repudiandae ut
        nihil totam autem aut tempora eligendi facilis, at enim quam, non ipsa,
        cumque delectus. Itaque corporis perferendis esse rerum, sit quo
        quisquam nesciunt fuga. Dolores placeat deleniti optio id velit non.
        Pariatur dignissimos eum exercitationem excepturi deserunt illo quos ab
        repudiandae. Animi cupiditate quidem nisi vero, corporis similique
        laboriosam hic illum quisquam et deleniti error, rem temporibus. Eius
        esse quos, voluptate voluptatibus sed repellendus deleniti molestias
        rerum sit harum illo magnam consectetur culpa blanditiis a officiis
        consequuntur, non, dolor minima at quam aliquid cum! Assumenda quidem
        molestiae in velit laborum non magni quis rerum sint ratione iure
        repudiandae qui adipisci unde neque quibusdam amet cumque vero ipsam
        porro, sit enim facere dolores maiores! Voluptatem rem similique sequi,
        quasi quas mollitia incidunt dignissimos modi quam dolor provident
        repellat aliquam facere voluptate neque, culpa atque ut alias labore?
        Laboriosam nihil asperiores libero omnis ex ullam quisquam, ratione sed
        id quae, recusandae vel quibusdam! Quas deserunt officiis porro
        explicabo dolor accusantium consequuntur commodi alias rerum, unde
        laborum corporis temporibus blanditiis.
        <br />
        <br />
        <br /> Officiis minima repudiandae, modi suscipit, vitae nisi aut harum
        atque nesciunt fugit veritatis explicabo hic quidem nihil saepe omnis
        quia! Alias, culpa? Repudiandae veritatis nesciunt minima nihil.
        Laudantium minus quam praesentium corrupti totam quia ipsum ipsa illum
        eligendi magnam alias iste libero et, doloribus in ad? Reprehenderit
        ratione neque ea, nam molestias quo ad fugit vero quisquam
        exercitationem, itaque ab sapiente expedita, iste illo asperiores amet
        nulla dolorem maxime? Ipsum saepe voluptate ullam placeat iure! Optio
        est ipsam odio deleniti magni in quam voluptatum sunt saepe dicta
        necessitatibus, harum obcaecati neque cupiditate adipisci minima dolorem
        natus iusto repellendus quas quae. Dolor, molestias illum! Eius iste
        perspiciatis veritatis ex ratione possimus modi placeat voluptates magni
        asperiores at sed fugiat neque, cum culpa temporibus exercitationem!
        Tenetur veritatis laborum quod quam magnam consequatur numquam deleniti
        nesciunt, sit ducimus praesentium pariatur eum rem? Laborum nisi
        temporibus sunt corporis doloremque harum eaque doloribus sint ullam
        alias. Excepturi rerum alias nostrum nisi possimus deleniti explicabo
        qui optio voluptatum at nulla reiciendis commodi omnis mollitia, aut
        accusamus molestias minus atque hic. Ipsam dolore sequi deserunt
        laborum, quisquam eius maxime ullam. Ducimus alias eaque animi ipsam
        debitis, laborum odit sequi, voluptates sunt quis, illo sed blanditiis.
        Pariatur quos saepe cupiditate porro at dolore id molestiae culpa
        provident recusandae doloremque reprehenderit delectus officiis
        blanditiis aut iste error, reiciendis consequuntur.
      </p>
    </div>
  );
};

export default GameDetails;
