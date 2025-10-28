import { useState, useEffect } from 'react';

interface CampaignData {
  goal: number;
  collectedValue: number;
  collectedPercentValue: number;
  supporters: number;
  loading: boolean;
  error: string | null;
}

export const getCampaignData = async () => {
      try {     
        const response = await fetch('https://www.vakinha.com.br/vaquinha/sunsense', {
          cache: 'no-store',
          mode: 'no-cors',
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
          }
        });
        
        if (!response.ok) {
          console.log(response)
          throw new Error('Erro ao buscar dados');
        }
        
        const html = await response.text();
        
        // Extrai o JSON do script __NEXT_DATA__
        const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);

        console.log(html);
        alert(' test')

        if (match) {
          const jsonData = JSON.parse(match[0]);
          const campaign = jsonData.props.pageProps.campaign;
          
          const newData = {
            goal: campaign.goal,
            collectedValue: campaign.collectedValue,
            collectedPercentValue: campaign.collectedPercentValue,
            supporters: campaign.approvedContributionsCount,
            loading: false,
            error: null,
          };
          
          console.log('✅ Dados da campanha atualizados:', newData);
          return newData;
        } else {
          throw new Error('Dados não encontrados no HTML');
        }
      } catch (error) {
        console.error('Erro ao buscar dados da campanha:', error);
        // Mantém os valores padrão em caso de erro
      }
}

export const useCampaignData = () => {
  const [data, setData] = useState<CampaignData>({
    goal: 0,
    collectedValue: 0,
    collectedPercentValue: 0,
    supporters: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
               
        const response = await fetch('https://www.vakinha.com.br/vaquinha/sunsense', {
          cache: 'no-store',
          mode: 'no-cors',
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
          }
        });
        
        if (!response.ok) {
          console.log(response)
          throw new Error('Erro ao buscar dados');
        }
        
        const html = await response.text();
        
        // Extrai o JSON do script __NEXT_DATA__
        const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);

        console.log(html)

        if (match) {
          const jsonData = JSON.parse(match[0]);
          const campaign = jsonData.props.pageProps.campaign;
          
          const newData = {
            goal: campaign.goal,
            collectedValue: campaign.collectedValue,
            collectedPercentValue: campaign.collectedPercentValue,
            supporters: campaign.approvedContributionsCount,
            loading: false,
            error: null,
          };
          
          console.log('✅ Dados da campanha atualizados:', newData);
          setData(newData);
        } else {
          throw new Error('Dados não encontrados no HTML');
        }
      } catch (error) {
        console.error('Erro ao buscar dados da campanha:', error);
        // Mantém os valores padrão em caso de erro
        setData(prev => ({
          ...prev,
          loading: false,
          error: 'Usando dados em cache',
        }));
      }
    };

    fetchCampaignData();
    
    // Atualiza a cada 5 minutos
    const interval = setInterval(fetchCampaignData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return data;
};
