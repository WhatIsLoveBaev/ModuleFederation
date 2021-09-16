import React, { Dispatch, Fragment, SetStateAction } from 'react';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { IconButton, SvgIconTypeMap } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { routes } from '../../../routes';
import { ROUTE_ICON, ROUTE_KEY } from '../../../routes/routes';
import { NavItem } from '../NavItem';


interface IProps {
    active: string | null;
    setActive: Dispatch<SetStateAction<string | null>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const RenderRoutes = ({
    active,
    setActive,
    setOpen,
}: IProps) => {
    const { replace } = useHistory();
    return (
        <Fragment>
            {routes.map(route => {
                if (route.key && route.key !== ROUTE_KEY.HOME) {
                    const stringPath = typeof route.path === 'string' ? route.path : '';
                    const activeTab = stringPath.split('/').filter(p => p)[0] === active;
                    const activeKey = stringPath.replace('/', '') || null;
                    const key = route.key;
                    const Icon: OverridableComponent<
                    SvgIconTypeMap<Record<string, unknown>, 'svg'>
                    > = ROUTE_ICON[route.key];

                    return (
                        <Fragment key={key}>
                            {(key && key !== ROUTE_KEY.HOME) && (
                                <NavItem
                                    ViewComponent={
                                        <IconButton
                                            onClick={() => {
                                                setOpen(false);
                                                setActive(activeKey);
                                                replace(stringPath);
                                            }}
                                        >
                                            <Icon />
                                        </IconButton>
                                    }
                                    active={activeTab}
                                    text={key}
                                    id={key}
                                    onShowMore={() => {}}
                                />
                            )}
                        </Fragment>
                    );
                }
                return null;
            })}
        </Fragment>
    );
};