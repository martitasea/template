import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useMediaQuery, Box} from '@material-ui/core';

import {BaseMapList, ResponsiveHeader, SidePanel, Map} from '@geomatico/geocomponents';

import {MAPSTYLES, WIDESCREEN_STEP, INITIAL_VIEWPORT, DRAWER_WIDTH, INITIAL_MAPSTYLE_URL} from '../config';
import Logo from '../components/icons/Logo';

import SectionTitle from '../components/SectionTitle';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: '90vh'
  },
  mapContent: {
    flexGrow: 1,
    padding: 0,
    position: 'absolute',
    top: theme.mixins.toolbar.minHeight,
    bottom: 0,
    right: 0,
    left: ({isSidePanelOpen, widescreen}) => isSidePanelOpen && widescreen ? DRAWER_WIDTH : 0,
  },
  layerlabel: {
    letterSpacing: 1.05,
    paddingLeft: 25,
  },
  legend: {
    fontSize: 12,
    marginLeft: 22
  },
  legendIcon: {
    marginLeft: 25,
  }
}));

const App = () => {
  const widescreen = useMediaQuery(`(min-width: ${WIDESCREEN_STEP})`, {noSsr: true});
  const [selectedStyleUrl, setSelectedStyleUrl] = useState(INITIAL_MAPSTYLE_URL);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const classes = useStyles({isSidePanelOpen, widescreen});

  const onViewportChange = (viewport) =>
    setViewport({
      ...viewport
    });
  const handleClose = () => setIsSidePanelOpen(!isSidePanelOpen);
  return (
    <>
      <ResponsiveHeader
        logo={<Logo/>}
        logoStyleProps={{
          width: 170,
          paddingTop: 0,
        }}
        onStartIconClick={widescreen ? undefined : handleClose}
      >
      </ResponsiveHeader>
      <SidePanel
        drawerWidth={DRAWER_WIDTH}
        anchor="left"
        isOpen={isSidePanelOpen}
        onClose={handleClose}
        widescreen={widescreen}
      >
        <div>
          <Box mb={6}>
            <SectionTitle title="CAPAS BASE"/>
            <BaseMapList
              styles={MAPSTYLES}
              selectedStyleUrl={selectedStyleUrl}
              onStyleChange={(basemap) => setSelectedStyleUrl(basemap)}
              typographyStyleProps={{fontSize: 14}}
            />
          </Box>
        </div>
      </SidePanel>
      <main className={classes.mapContent}>
        <Map
          mapStyle={selectedStyleUrl}
          viewport={viewport}
          onViewportChange={onViewportChange}
        />
      </main>
    </>
  );
};
export default App;