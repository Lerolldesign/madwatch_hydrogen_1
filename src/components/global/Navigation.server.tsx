import {Link} from '@shopify/hydrogen';
import clsx from 'clsx';
import {useCallback} from 'react';
import type {SanityMenuLink} from '../../types';
import CollectionGroup from './collectionGroup/CollectionGroup.server';

/**
 * A server component that defines the navigation for a web storefront
 */

type Props = {
  menuLinks: SanityMenuLink[];
};

export default function Navigation({menuLinks}: Props) {
  const renderLinks = useCallback(() => {
    return menuLinks?.map((link) => {
      if (link._type === 'collectionGroup') {
        return <CollectionGroup collectionGroup={link} key={link._key} />;
      }
      if (link._type === 'linkExternal') {
        return (
          <div className="flex items-center" key={link._key}>
            <a
              className="linkTextNavigation"
              href={link.url}
              rel="noreferrer"
              target={link.newWindow ? '_blank' : '_self'}
            >
              {link.title}
            </a>
          </div>
        );
      }
      if (link._type === 'linkInternal') {
        if (!link.slug) {
          return null;
        }

        return (
          <div className="flex items-center" key={link._key}>
            <Link className="linkTextNavigation" to={link.slug}>
              {link.title}
            </Link>
          </div>
        );
      }

      return null;
    });
  }, [menuLinks]);

  return (
    <nav
      className={clsx(
        'relative hidden items-stretch justify-start gap-6 text-sm lg:tracking-[.1rem] lg:text-[2.9rem] text-black madfont uppercase',
        'lg:flex',
      )}
    >
      {renderLinks()}
    </nav>
  );
}
