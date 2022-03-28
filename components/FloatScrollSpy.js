import { colors } from '../constants/colors';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FloatScrollSpy({
  showSpy,
  height,
  width,
  section,
  handler
}) {
  if (showSpy) {
    return (
      <div
        onClick={handler}
        style={{
          width: 30,
          height: 30,
          borderRadius: 30 / 2,
          position: 'fixed',
          top: height - 50 - 20,
          right: width * 0.5,
          zIndex: 1,
          // backgroundColor: colors.orange,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {section < 1 && (
          <FontAwesomeIcon
            style={{ color: colors.orange }}
            icon={faChevronDown}
            size={10}
          />
        )}
        {section > 0 && (
          <FontAwesomeIcon
            style={{ color: colors.orange }}
            icon={faChevronUp}
            size={10}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
}
