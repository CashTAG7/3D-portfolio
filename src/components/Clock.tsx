import { useState, useEffect, FC } from 'react';
import style from './clock.module.css';

interface MarkProps {
  angle: number;
  type: string;
}

const Mark: FC<MarkProps> = ({ angle, type }) => {
  return (
    <div
      className={`${style['clock__face-mark']} ${
        style['clock__face-mark--' + type]
      } bg-black`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        style={{
          width: '5px',
          height: type === 'hour' ? '30px' : '10px',
          backgroundColor: type === 'hour' ? 'red' : 'black',
        }}
      />
    </div>
  );
};

interface HandProps {
  type: string;
  angle: number;
}

const Hand: FC<HandProps> = ({ type, angle }) => {
  return (
    <div
      className={`${style['clock__hand']} bg-black`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div
        className={`${style['clock__hand-body']} ${
          style['clock__hand-body--' + type]
        }`}
      />
    </div>
  );
};

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderFaceMarks = () => {
    const marks = [];
    for (let i = 1; i <= 60; i++) {
      marks.push(<Mark angle={i * 6} type={i % 5 === 0 ? 'hour' : 'minute'} />);
    }
    return marks;
  };

  return (
    <div className={style.container}>
      <div className={style.clock}>
        <div className={style['clock__face']}>{renderFaceMarks()}</div>
        <Hand type="hour" angle={30 * (currentTime?.getHours() || 0)} />
        <Hand type="minutes" angle={6 * (currentTime?.getMinutes() || 0)} />
        <Hand type="seconds" angle={6 * (currentTime?.getSeconds() || 0)} />
      </div>
    </div>
  );
}
