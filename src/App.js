import React, { useState, useEffect } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {
  Epic,
  Tabbar,
  View,
  TabbarItem,
  SplitCol,
  Panel,
  Cell,
  Group,
  SplitLayout,
  PanelHeader,
  ConfigProvider,
  AdaptivityProvider,
  AppRoot,
  ModalRoot,
  ModalCard,
  Button,
  PopoutWrapper,
  FormItem,
  Input,
  Header,
  FormLayout,
  Title,
  Div,
  SimpleCell
} from '@vkontakte/vkui';

import { Icon16Fullscreen, Icon16ArrowsUpDown } from "@vkontakte/icons"

import ResizePage from "./panels/ResizePage"
import WhidePhotoPage from "./panels/WhidePhotoPage.js";


const App = () => {
  const [activeStory, setActiveStory] = useState('WhidePhoto');

  const [popout, setPopout] = useState(null);


  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
  const isDesktop = window.innerWidth >= 850;
  const hasHeader = true;




  return (

    <ConfigProvider platform="ios" scheme="space_gray">
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout
            popout={popout}
            header={hasHeader && <PanelHeader separator={false} />}
            style={{ justifyContent: "center" }}
          >
            {isDesktop && (
              <SplitCol fixed width={280} maxWidth={280}>
                <Panel>
                  {hasHeader && <PanelHeader />}
                  <Group>

                    <Cell
                      disabled={activeStory === 'WhidePhoto'}
                      style={activeStory === 'WhidePhoto' ? {
                        backgroundColor: "var(--button_secondary_background)",
                        borderRadius: 8
                      } : {}}
                      data-story="WhidePhoto"
                      onClick={onStoryChange}
                      before={<Icon16ArrowsUpDown />}
                    >
                      Широкое Фото
                    </Cell>

                    <Cell
                      disabled={activeStory === 'ResizePhoto'}
                      style={activeStory === 'ResizePhoto' ? {
                        backgroundColor: "var(--button_secondary_background)",
                        borderRadius: 8
                      } : {}}
                      data-story="ResizePhoto"
                      onClick={onStoryChange}
                      before={<Icon16Fullscreen />}
                    >
                      Изменить размер фото
                    </Cell>

                  </Group>
                </Panel>
              </SplitCol>
            )}

            <SplitCol
              animate={!isDesktop}
              spaced={isDesktop}
              width={isDesktop ? '560px' : '100%'}
              maxWidth={isDesktop ? '560px' : '100%'}
            >
              <Epic activeStory={activeStory} tabbar={!isDesktop &&
                <Tabbar>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'WhidePhoto'}
                    data-story="WhidePhoto"
                    text="Широкое фото"
                  ><Icon16ArrowsUpDown /></TabbarItem>
                  <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'ResizePhoto'}
                    data-story="ResizePhoto"
                    text="Изменить размер фото"
                  ><Icon16Fullscreen /></TabbarItem>
                </Tabbar>
              }>
                <View id="WhidePhoto" activePanel="WhidePhoto">
                  <WhidePhotoPage id="WhidePhoto" />
                </View>

                <View id="ResizePhoto" activePanel="ResizePhoto">
                  <ResizePage id="ResizePhoto" />
                </View>

              </Epic>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
export default App;
