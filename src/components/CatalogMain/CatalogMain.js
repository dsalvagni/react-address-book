import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import InlineGrid from "components/InlineGrid/InlineGrid";
import InlineGridItem from "components/InlineGrid/InlineGridItem";
import Card from "components/Card/Card";

import styles from "./CatalogMain.module.scss";

const CatalogMain = props => {
  const { items, search, onScrollEnd } = props;

  const renderItems = items => {
    return items.map((item, key) => {
      return (
        <InlineGridItem key={key}>
          <Link to={`/details/${item.getUsername()}`} className={styles.cta}>
            <Card user={item} highlight={search.query} />
          </Link>
        </InlineGridItem>
      );
    });
  };

  const renderMain = items => {
    if (!items || !items.length)
      if (search.query)
        return (
          <div className="container">
            <h1>No contact found</h1>
            <p>{`We weren't able to find any contact with "${
              search.query
            }".`}</p>
          </div>
        );

    return <InlineGrid>{renderItems(items)}</InlineGrid>;
  };

  const onScroll = event => {
    const isScrollEnd =
      event.target.scrollHeight - event.target.scrollTop <=
      event.target.clientHeight;
    if (isScrollEnd) onScrollEnd.call(this, event);
  };

  return (
    <main className={styles.main}>
      <section className={styles.main__content} onScroll={onScroll}>
        {renderMain(items)}
      </section>
    </main>
  );
};

CatalogMain.defaultProps = {
  items: [],
  onScrollEnd: () => {}
};

CatalogMain.propTypes = {
  items: PropTypes.array,
  onScrollEnd: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  null
)(CatalogMain);
