    import React, { useEffect } from "react";
    import { Segment } from "semantic-ui-react";
    import ChatBot from "react-simple-chatbot";
    import { useTranslation } from "react-i18next";
    import { useStore } from "../../zustand/useStore";
    import current from "../../services/Services";

    function Chatbot() {
    const { t,i18n } = useTranslation();
    const { language } = useStore((state) => ({
        language: state.language,
    }));
    useEffect(() => {
        console.log("inside the language change",language)
        i18n.changeLanguage(language);
        if (!sessionStorage.getItem('reloaded')) {
            sessionStorage.setItem('reloaded', 'true');
            window.location.reload();
          }
      
    }, []);

    const steps = [
        {
        id: "Greet",
        message: t("greet"),
        trigger: "Ask Name",
        },
        {
        id: "Ask Name",
        message: t("askName"),
        trigger: "waiting1",
        },
        {
        id: "waiting1",
        user: true,
        trigger: "Name",
        },
        {
        id: "Name",
        message: t("name", { previousValue: "{previousValue}" }),
        trigger: "help",
        },
        {
        id: "help",
        message: t("help"),
        trigger: "waiting2",
        },
        {
        id: "waiting2",
        message: t("waiting2"),
        trigger: "issue",
        },
        {
        id: "issue",
        options: [
            { value: "Weather", label: t("weatherRegion"), trigger: "React" },
        ],
        },
        {
        id: "React",
        message: t("react"),
        trigger: "fine",
        },
        {
        id: "fine",
        message: t("thankYou"),
        end: true,
        },
    ];


    return (
        <Segment floated="right">
        <ChatBot steps={steps} />
        </Segment>
    );
    }

    export default Chatbot;