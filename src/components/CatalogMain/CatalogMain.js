import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import InlineGrid from "components/InlineGrid/InlineGrid";
import InlineGridItem from "components/InlineGrid/InlineGridItem";
import Card from "components/Card/Card";

import styles from "./CatalogMain.module.scss";

/**
 * Wrapper for the main content of users' catalog.
 * Displays the list of users and trigger the scrollEnd callback when
 * the scroll hits the bottom of the catalog.
 *
 * Redux
 */
const CatalogMain = props => {
  const { items, search, onScrollEnd } = props;

  /**
   * Iterates on items to generate a list of users' cards.
   * @param User[] items
   * @returns InlineGridItem[]
   */
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

  /**
   * Renders this component contents.
   * Returns a message in case there's no item to display for a given search query
   * @param User[] items
   * @returns Not found items message || Items
   */
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

  /**
   * Will call props ScrollEnd callback when the scrollbar hits the bottom of catalog
   * @param Event event
   */
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
  /** User[] */
  items: PropTypes.array,
  /** Called when the scrollbar hits the bottom of the catalog */
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
