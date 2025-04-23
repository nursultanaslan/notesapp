import {
  Authenticator,
  Button,
  Text,
  TextField,
  Heading,
  Flex,
  View,
  Image,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import { useState } from "react";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [showText, setShowText] = useState(false)
  const handleClick = () => {
    setShowText(true); // Butona tıklanınca yazıyı göster
    setTimeout(() => {
      setShowText(false); // Yazıyı 3 saniye sonra gizle
    }, 3000); // 3 saniye sonra yazıyı kaybolacak şekilde ayarla
  };
  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      background: "linear-gradient(to bottom, #001f3d 0%, #8c62b9 60%, #fbc2eb 100%)"
    }}>
            {showText && (
        <div style={{
          position: 'absolute',
          top :'50px', // Sayfanın üst kısmına yerleştir
          fontSize: '30px',
          color: 'white',
          fontFamily: 'Sono, monospace',
          animation: 'fadeIn 3s ease-out'
        }}>
          Seni seviyorum Aşkımmm 
        </div>
      )}

      <img src="/assets/vbn.JPG"
        style={{ width: '300px', height: 'auto', borderRadius: '12px', marginBottom: '10px' }}
      />
      <Button onClick = { handleClick}style={{ fontFamily: "Sono, monospace", backgroundColor: '#f7f5f1' }}>
        Nur & Barış
      </Button>

    </div>

  );
}