export type Relays = RelayItem[];
export type RelayItem = {
  key: string;
  river_name: string;
  relay_url: string;
  live_cam: boolean;
  live_cam_url: string;
};

export const relays: Relays = [
  {
    key: "kirino",
    river_name: "きりの川",
    relay_url: "wss://relay-jp.nostr.wirednet.jp",
    live_cam: true,
    live_cam_url: "https://relay-jp.nostr.wirednet.jp/index.html",
  },
  {
    key: "yabumi",
    river_name: "やぶみ川",
    relay_url: "wss://yabu.me",
    live_cam: true,
    live_cam_url: "https://yabu.me/index.html",
  },
  {
    key: "c-stellar",
    river_name: "かすてら川",
    relay_url: "wss://nrelay.c-stellar.net",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "kojira",
    river_name: "こじら川",
    relay_url: "wss://r.kojira.io",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "shino3",
    river_name: "しの川",
    relay_url: "wss://relay-jp.shino3.net",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "helche",
    river_name: "へるちぇ小川",
    relay_url: "wss://nrelay-jp.helche.cc",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "ochaone",
    river_name: "ちゃわん川",
    relay_url: "wss://nostream.ocha.one",
    live_cam: true,
    live_cam_url: "https://nostream.ocha.one/index.html",
  },
  {
    key: "barineco",
    river_name: "ばりねこ川",
    relay_url: "wss://relay.barine.co",
    live_cam: true,
    live_cam_url: "https://relay.barine.co/notes",
  },
  {
    key: "compileerror",
    river_name: "こんぱる川",
    relay_url: "wss://nostr.compile-error.net",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "haniwar",
    river_name: "はにヶ原",
    relay_url: "wss://relay-jp.haniwar.com",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "h3z",
    river_name: "ななみヶ池",
    relay_url: "wss://nostr-relay.h3z.jp",
    live_cam: true,
    live_cam_url: "https://nostr-relay.h3z.jp/view/index.html",
  },
  {
    key: "offchain",
    river_name: "鎖ヶ川(外)",
    relay_url: "wss://offchain.pub",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "tchncs",
    river_name: "てくに池(独)",
    relay_url: "wss://relay.tchncs.de",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "kangaroo",
    river_name: "かんがろ川(外)",
    relay_url: "wss://45.135.180.140",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "kirino_g",
    river_name: "きりの川(GLOBAL)",
    relay_url: "wss://relay.nostr.wirednet.jp",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "kojira_g",
    river_name: "こじら川(GLOBAL)",
    relay_url: "wss://x.kojira.io",
    live_cam: false,
    live_cam_url: "",
  },
  {
    key: "shino3_global",
    river_name :"しの川(GLOBAL)",
    relay_url: "wss://relay.nostx.io",
    live_cam: false,
    live_cam_url: "",
  },
];

export const getRelay = (key: string): RelayItem | undefined => {
  return relays.find((item) => item.key === key);
};
