import style from 'radium/lib/components/style';
import { colors } from '../constants/colors';

export function ListButton({ key, title, type, handler = null }) {
  const styles = {
    fill_orange: {
      color: '#fff',
      listStyleType: 'none',
      padding: 10,
      fontSize: '10px',
      backgroundColor: colors.orange
    },
    border_black: {
      color: '#fff',
      listStyleType: 'none',
      marginRight: 10,
      fontSize: '10px',
      padding: 10,
      borderWidth: 1,
      borderColor: '#fff',
      border: '1px solid'
    },
    inline_white: {
      color: '#fff',
      fontSize: '9px',
      listStyleType: 'none'
    },
    fill_black: {
      listStyleType: 'none',
      backgroundColor: '#fff',
      height: 20,
      width: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '9px',
      textAlign: 'center'
    }
  };
  return (
    <li onClick={handler} style={styles[type]} key={key}>
      <button style={{ all: 'unset' }}>{title}</button>
    </li>
  );
}
