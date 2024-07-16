import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "searchCity": "search for a city",
      "title": "Weather wise",
      "windSpeed": "wind speed",
      "humidity": "humidity",
      "visibility": "visibility",
      "uvIndex": "uv index",
      "pressure": "pressure",
      "lastUpdated": "last updated",
      "feelsLike": "feels like",

        "greet": "Hi welcome to the weather wise!",
        "askName": "What's your name?",
        "name": "Nice to meet you, {previousValue}!",
        "help": "How can I help you today?",
        "waiting2": "I can provide you with current weather conditions, forecasts, and provide tailored",
        "weatherRegion": "weather region",
        "react": "Search your region in the search bar and get the current weather details.",
        "thankYou": "thank you"
      
    }
  },
  ar: {
    translation: {
      "searchCity": "ابحث عن مدينة",
      "title": "حكمة الطقس",
      "windSpeed": "سرعة الرياح",
      "humidity": "الرطوبة",
      "visibility": "الرؤية",
      "uvIndex": "مؤشر الأشعة فوق البنفسجية",
      "pressure": "الضغط",
      "lastUpdated": "آخر تحديث",
      "feelsLike": "يشعر وكأنه",
      "greet": "مرحبًا بك في حكمة الطقس!",
    
        "askName": "ما اسمك؟",
        "name": "سعيد بلقائك، {previousValue}!",
        "help": "كيف يمكنني مساعدتك اليوم؟",
        "waiting2": "يمكنني تزويدك بأحوال الطقس الحالية، التوقعات، وتقديم خدمات مخصصة",
        "weatherRegion": "منطقة الطقس",
        "react": "ابحث عن منطقتك في شريط البحث واحصل على تفاصيل الطقس الحالية.",
        "thankYou": "شكرا"
      
    }
  },
  it: {
    translation: {
      "searchCity": "cerca una città",
      "title": "Saggio del tempo",
      "windSpeed": "velocità del vento",
      "humidity": "umidità",
      "visibility": "visibilità",
      "uvIndex": "indice UV",
      "pressure": "pressione",
      "lastUpdated": "ultimo aggiornamento",
      "feelsLike": "sembra",
    
        "greet": "Ciao, benvenuto a Weather Wise!",
        "askName": "Come ti chiami?",
        "name": "Piacere di conoscerti, {previousValue}!",
        "help": "Come posso aiutarti oggi?",
        "waiting2": "Posso fornirti le condizioni meteorologiche attuali, previsioni e servizi personalizzati",
        "weatherRegion": "regione meteorologica",
        "react": "Cerca la tua regione nella barra di ricerca e ottieni i dettagli meteorologici attuali.",
        "thankYou": "grazie"
     
    }
  },
  ja: {
    translation: {
      "searchCity": "都市を検索",
      "title": "天気の知恵",
      "windSpeed": "風速",
      "humidity": "湿度",
      "visibility": "視界",
      "uvIndex": "UV指数",
      "pressure": "圧力",
      "lastUpdated": "最終更新",
      "feelsLike": "体感温度",
    
        "greet": "天気の知恵へようこそ！",
        "askName": "お名前は何ですか？",
        "name": "お会いできて嬉しいです、{previousValue}さん！",
        "help": "今日はどのようにお手伝いできますか？",
        "waiting2": "現在の天気、予報、カスタマイズされたサービスを提供できます",
        "weatherRegion": "天気の地域",
        "react": "検索バーで地域を検索し、現在の天気の詳細を取得してください。",
        "thankYou": "ありがとう"
  
    }
  },
  de: {
    translation: {
      "searchCity": "Suche nach einer Stadt",
      "title": "Wetterweise",
      "windSpeed": "Windgeschwindigkeit",
      "humidity": "Luftfeuchtigkeit",
      "visibility": "Sichtweite",
      "uvIndex": "UV-Index",
      "pressure": "Druck",
      "lastUpdated": "zuletzt aktualisiert",
      "feelsLike": "fühlt sich an wie",
    
        "greet": "Hallo, willkommen bei Weather Wise!",
        "askName": "Wie heißt du?",
        "name": "Schön dich kennenzulernen, {previousValue}!",
        "help": "Wie kann ich dir heute helfen?",
        "waiting2": "Ich kann dir aktuelle Wetterbedingungen, Vorhersagen und maßgeschneiderte Dienste bieten",
        "weatherRegion": "Wetterregion",
        "react": "Suche deine Region in der Suchleiste und erhalte die aktuellen Wetterdetails.",
        "thankYou": "danke"
     
    }
  },
  fr: {
    translation: {
      "searchCity": "rechercher une ville",
      "title": "Sage météo",
      "windSpeed": "vitesse du vent",
      "humidity": "humidité",
      "visibility": "visibilité",
      "uvIndex": "indice UV",
      "pressure": "pression",
      "lastUpdated": "dernière mise à jour",
      "feelsLike": "ressenti",
    
        "greet": "Bonjour, bienvenue chez Weather Wise!",
        "askName": "Comment vous appelez-vous?",
        "name": "Ravi de vous rencontrer, {previousValue}!",
        "help": "Comment puis-je vous aider aujourd'hui?",
        "waiting2": "Je peux vous fournir les conditions météorologiques actuelles, les prévisions et des services personnalisés",
        "weatherRegion": "région météorologique",
        "react": "Recherchez votre région dans la barre de recherche et obtenez les détails météorologiques actuels.",
        "thankYou": "merci"
      
    }
  },
  es: {
    translation: {
      "searchCity": "buscar una ciudad",
      "title": "Sabio del clima",
      "windSpeed": "velocidad del viento",
      "humidity": "humedad",
      "visibility": "visibilidad",
      "uvIndex": "índice UV",
      "pressure": "presión",
      "lastUpdated": "última actualización",
      "feelsLike": "se siente como",

        "greet": "¡Hola, bienvenido a Weather Wise!",
        "askName": "¿Cómo te llamas?",
        "name": "¡Encantado de conocerte, {previousValue}!",
        "help": "¿Cómo puedo ayudarte hoy?",
        "waiting2": "Puedo proporcionarte las condiciones meteorológicas actuales, pronósticos y servicios personalizados",
        "weatherRegion": "región meteorológica",
        "react": "Busca tu región en la barra de búsqueda y obtén los detalles meteorológicos actuales.",
        "thankYou": "gracias"
      
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });


  
export default i18n;
