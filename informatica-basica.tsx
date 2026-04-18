import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#314152db' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-if.png')}
          style={styles.reactLogo}
        />
      }
    >

      {/* TÍTULO */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={styles.title}>
          INFORMÁTICA BÁSICA
        </ThemedText>
      </ThemedView>

      {/* EMENTA */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          EMENTA
        </ThemedText>

        <ThemedText>
          Conceitos básicos de software e hardware.{'\n'}
          Tipos de softwares.{'\n'}
          Internet.{'\n'}
          Correio eletrônico.{'\n'}
          Editor de textos.{'\n'}
          Editor de planilhas eletrônicas.{'\n'}
          Editor de apresentações de slides.
        </ThemedText>
      </ThemedView>

      {/* PERFIL PROFISSIONAL */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          PERFIL PROFISSIONAL DO DOCENTE
        </ThemedText>

        <ThemedText>
          Bacharelado em Ciência da Computação, Engenharia da Computação,
          Engenharia de Software ou Sistemas de Informação.{'\n'}
          Licenciatura em Informática ou Computação.{'\n'}
          Tecnólogo em Sistemas para Internet, Análise e Desenvolvimento de Sistemas,
          Banco de Dados, Sistemas Embarcados ou Redes de Computadores.
        </ThemedText>
      </ThemedView>

      {/* ÁREAS DE INTEGRAÇÃO */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          ÁREAS DE INTEGRAÇÃO
        </ThemedText>

        <ThemedText>
          1. Todas as disciplinas: uso de internet, editor de texto e slides com conteúdos
          interdisciplinares.{'\n'}
          2. Matemática: utilização de planilhas eletrônicas.
        </ThemedText>
      </ThemedView>

      {/* PROGRAMA */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          PROGRAMA / OBJETIVO GERAL
        </ThemedText>

        <ThemedText>
          Desenvolver a capacidade de interação dos alunos com o universo computacional
          por meio da utilização de sistemas operacionais e softwares utilitários.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.title}>
          OBJETIVOS ESPECÍFICOS
        </ThemedText>

        <ThemedText>
          1. Capacitar o aluno com conhecimentos básicos de hardware e software.{'\n'}
          2. Capacitar o aluno na utilização de editores de texto, planilha e slides.{'\n'}
          3. Conhecer conceitos de internet, e-mail, pesquisa e computação em nuvem.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.title}>
          CONTEÚDO PROGRAMÁTICO
        </ThemedText>

        <ThemedText>

          1. Conceitos básicos de hardware e software{'\n'}
          1.1 Tipos de computadores{'\n'}
          1.2 Componentes de computadores{'\n'}
          1.3 Sistema operacional{'\n'}
          1.4 Hardware e software{'\n\n'}

          2. Internet e correio eletrônico{'\n'}
          2.1 História e conceito de internet{'\n'}
          2.2 Navegadores{'\n'}
          2.3 Ferramentas de busca{'\n'}
          2.4 E-mail{'\n'}
          2.5 Computação em nuvem{'\n\n'}

          3. Editor de texto{'\n'}
          3.1 Interface e menus{'\n'}
          3.2 Criar e salvar documentos{'\n'}
          3.3 Formatação de texto e parágrafo{'\n'}
          3.4 Imagens e tabelas{'\n'}
          3.5 Cabeçalho e rodapé{'\n'}
          3.6 Sumário e revisão ortográfica{'\n\n'}

          4. Editor de planilhas{'\n'}
          4.1 Interface e gerenciamento{'\n'}
          4.2 Formatação de células{'\n'}
          4.3 Funções e fórmulas{'\n'}
          4.4 Gráficos e filtros{'\n'}
          4.5 Impressão{'\n\n'}

          5. Editor de slides{'\n'}
          5.1 Interface e criação de slides{'\n'}
          5.2 Formatação e design{'\n'}
          5.3 Apresentações

        </ThemedText>
      </ThemedView>

      {/* BIBLIOGRAFIA BÁSICA */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          BIBLIOGRAFIA BÁSICA
        </ThemedText>

        <ThemedText>
          VELOSO, F. C. Informática: conceitos básicos. 9. ed. Rio de Janeiro: Campus, 2014.{'\n'}
          MANZANO, A. L. G. Estudo dirigido de informática básica. São Paulo: Érica, 2007.{'\n'}
          MARÇULA, M. Informática: conceitos e aplicações. São Paulo: Érica, 2013.
        </ThemedText>
      </ThemedView>

      {/* BIBLIOGRAFIA COMPLEMENTAR */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.title}>
          BIBLIOGRAFIA COMPLEMENTAR
        </ThemedText>

        <ThemedText>
          ABDALLA, S. L. Informática para concursos públicos.{'\n'}
          FUSTINONI, D. F. R. Informática básica para ensino técnico.{'\n'}
          SILVA, F. S. Word 2013 Básico.{'\n'}
          SATIN, H.; FIORAVANTI, A. Informática para concursos.{'\n'}
          VELLOSO, F. C. Informática - Conceitos Básicos.
        </ThemedText>
      </ThemedView>

      {/* FINAL */}
      <ThemedText style={styles.title}>
        ELABORADO POR
      </ThemedText>

      <ThemedText>
        Comissão de Harmonização das Matrizes
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 12,
  },
  title: {
    backgroundColor: '#028848',
    borderWidth: 1,
    color: '#fffefe',
    borderColor: '#000',
    padding: 8,
    marginBottom: 10,
  },
  reactLogo: {
    height: 600,
    width: '100%',
  },
});