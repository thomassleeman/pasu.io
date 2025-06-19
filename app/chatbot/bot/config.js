import ResponseOptions from "../widgets/ResponseOptions";
import LinkButton from "../widgets/LinkButton";
import UpdateDbAndReturnToDashButton from "../widgets/UpdateDbAndReturnToDashButton";
import InitialAssessmentHandler from "../widgets/InitialAssessmentHandler";
import ProceedToSolitaryProfile from "../widgets/ProceedToSolitaryProfile";
import CycleThroughProfilesToDiscuss from "../widgets/CycleThroughProfilesToDiscuss";
import { initialMessages } from "./messages";
import BotAvatar from "./BotAvatar";
import UserAvatar from "./UserAvatar";
import HomeButton from "../widgets/HomeButton";

const config = {
  initialMessages: initialMessages,
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  state: {
    initialAssessmentScores: {
      exhaustion: 0,
      detachment: 0,
      emotionalImpairment: 0,
      cognitiveImpairment: 0,
    },
    secondaryAssessmentScores: {
      exhaustion: 0,
      detachment: 0,
      emotionalImpairment: 0,
      cognitiveImpairment: 0,
    },
    burnoutProfiles: {},
    lastUpdated: 0,
    profileString: "",
    profileArray: [],
  },
  widgets: [
    {
      widgetName: "ResponseOptions",
      widgetFunc: (props) => <ResponseOptions {...props} />,
      mapStateToProps: [
        "initialAssessmentScores",
        "lastUpdated",
        "profileString",
        "profileArray",
      ],
    },
    {
      widgetName: "LinkButton",
      widgetFunc: (props) => <LinkButton {...props} />,
    },
    {
      widgetName: "HomeButton",
      widgetFunc: (props) => <HomeButton {...props} />,
    },
    {
      widgetName: "InitialAssessmentHandler",
      widgetFunc: (props) => <InitialAssessmentHandler {...props} />,
      mapStateToProps: ["initialAssessmentScores"],
    },
    {
      widgetName: "CycleThroughProfilesToDiscuss",
      widgetFunc: (props) => <CycleThroughProfilesToDiscuss {...props} />,
      mapStateToProps: ["profileArray"],
    },
    {
      widgetName: "ProceedToSolitaryProfile",
      widgetFunc: (props) => <ProceedToSolitaryProfile {...props} />,
      mapStateToProps: ["profileString"],
    },
    {
      widgetName: "UpdateDbAndReturnToDashButton",
      widgetFunc: (props) => <UpdateDbAndReturnToDashButton {...props} />,
      mapStateToProps: ["initialAssessmentScores", "secondaryAssessmentScores"],
    },
  ],
};

export default config;
