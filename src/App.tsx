import { useEffect as UseEffect} from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { UseCharacter } from './hooks/useCharacter';

const app = () => {
  const char = UseCharacter('Yann');

  UseEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
      </C.Map>
    </C.Container>
  );
}

export default app;