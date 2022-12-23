import "./styles/Title.css";
import p from '../assets/title/p.png';
import r from '../assets/title/r.png';
import o from '../assets/title/o.png';
import j from '../assets/title/j.png';
import e from '../assets/title/e.png';
import c from '../assets/title/c.png';
import t from '../assets/title/t.png';


const Title = () => {

  return (
    <div className="title-container">
      <>
        <img src={p} alt='P'></img>
        <img src={r} alt='r'></img>
        <img src={o} alt='o'></img>
        <img src={j} alt='j'></img>
        <img src={e} alt='e'></img>
        <img src={c} alt='c'></img>
        <img src={t} alt='t'></img>
      </>
      <div id="num">42</div>
    </div>
  );
};

export default Title;