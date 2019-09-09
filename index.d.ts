declare module 'react-native-admob-ex' {
	import React from 'react';

	interface AdMobBannerProps {
		adUnitID: string;
		adSize?: 'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner' | 'leaderboard' | 'smartBannerPortrait' | 'smartBannerLandscape';
		testDevices?: string[];
		onSizeChange?: Function;
		onAdLoaded?: Function;
		onAdFailedToLoad?: Function;
		onAdOpened?: Function;
		onAdClosed?: Function;
		onAdLeftApplication?: Function;
	}

	interface PublisherBannerProps extends AdMobBannerProps {
		validAdSizes?: string[];
		onAppEvent?: Function;
	}

	export class AdMobBanner extends React.Component<AdMobBannerProps> {
		constructor(props: AdMobBannerProps);
	}

	export class PublisherBanner extends React.Component<PublisherBannerProps> {
		constructor(props: PublisherBannerProps);
	}

	interface AdMobInterstitial {
		setAdUnitID(adUnitID: string): void;
		setTestDevices(devices: string[]): void;
		requestAd(): Promise<any>;
		showAd(): Promise<any>;
		isReady(): void;

		addEventListener(event: string, handler: Function): any;
		removeEventListener(event: string, handler: Function): void;
		removeAllListeners(): void;

		simulatorId: string;
	}

	interface AdMobRewarded extends AdMobInterstitial {}

	export const AdMobInterstitial: AdMobInterstitial;
	export const AdMobRewarded: AdMobRewarded;
}
