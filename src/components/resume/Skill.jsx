import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const SkillWrapper = styled.div`
  text-align: center;
`;
const SkillIconWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;
const SkillIcon = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  object-fit: contain;
  grid-column: 1/1;
  grid-row: 1/1;
`;
const SkillGauge = styled.svg`
  width: 120px;
  height: 120px;
  grid-column: 1/1;
  grid-row: 1/1;
`;

const SkillGaugeCircle = styled.circle`
  stroke-width: 4px;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: ${props => props.circumference}
    ${props => props.circumference};
  stroke-dashoffset: ${props => props.offset};
  stroke-linecap: 'round';
  transition: 1s all ease-out;
`;

const Skill = ({ icon, name, xp = 0, size = 80 }) => {
  const radius = 58;
  const circumference = radius * 2 * Math.PI;
  const [delayedXp, setDelayedXp] = useState(0);
  const offset = circumference - (delayedXp / 100) * circumference;

  useEffect(() => {
    setTimeout(() => {
      setDelayedXp(xp);
    }, 100);
  }, [xp]);

  const gaugeColor = xp => {
    if (xp <= 33) {
      return '#afb6c0';
    } else if (xp > 33 && xp < 66) {
      return '#637184';
    } else {
      return '#1a344d';
    }
  };

  return (
    <SkillWrapper>
      <SkillIconWrapper>
        <SkillGauge>
          <SkillGaugeCircle
            stroke={gaugeColor(xp)}
            fill='transparent'
            r={radius}
            circumference={circumference}
            offset={offset}
            cx='60'
            cy='60'
          />
        </SkillGauge>
        <SkillIcon src={icon} size={size} alt={name} />
      </SkillIconWrapper>
      <div className='font_monad'>{name}</div>
    </SkillWrapper>
  );
};

export default Skill;
