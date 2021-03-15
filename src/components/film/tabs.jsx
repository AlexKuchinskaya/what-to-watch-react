import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Tabs = ({children}) => {
  const [activeTab, setactiveTab] = useState(children[0].props.label);

  const handleTabClick = (evt, newActiveTab) => {
    evt.preventDefault();
    setactiveTab(newActiveTab);
  };

  return (

    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {children.map((tabName) => (
            <li key={tabName.props.label} className={`movie-nav__item ${tabName.props.label === activeTab ? `movie-nav__item--active` : ``}`}>
              <a
                href="#"
                onClick={(e) => handleTabClick(e, tabName.props.label)}
                className="movie-nav__link">
                {tabName.props.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {children.map((child) => {
        if ((child.props.label === activeTab)) {
          return (
            <React.Fragment key={child.props.label}>{child.props.children}</React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tabs;
