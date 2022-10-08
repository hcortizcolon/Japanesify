import browser from 'webextension-polyfill';
import { JapanesifyState } from '../utils/types';
import { getCurrentTabId } from '../utils/utils';

export const sendMessage = async (): Promise<void> => {
  const tabId = await getCurrentTabId();
  const state = (await browser.storage.local.get() as JapanesifyState)
  browser.tabs.sendMessage(tabId, state);
};

browser.tabs.onUpdated.addListener(sendMessage);
browser.tabs.onActivated.addListener(sendMessage);
