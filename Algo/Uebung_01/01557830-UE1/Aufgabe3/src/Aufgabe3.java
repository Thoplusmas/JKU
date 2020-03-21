import java.io.FileOutputStream;
import java.io.PrintStream;

public class Aufgabe3 {
        public static void main(String[] args) throws Exception {

                int[][] dreieck = new int[][] { {}, // zeile 0
                                {}, // zeile 1
                                { 2, 3 }, // zeile 2
                                { 3 }, // zeile 3
                };
                int[][] quadrat = new int[][] { {}, // zeile 0
                                { 1, 2 }, // zeile 1
                                { 1, 2 } // zeile 2
                };
                int[][] achteck = new int[][] { { 1, 2 }, // zeile 0
                                { 0, 3 }, // zeile 1
                                { 0, 3 }, // zeile 2
                                { 1, 2 } // zeile 3
                };
                int[][] vieleck = new int[][] { { 2 }, // zeile 0
                                { 0, 3 }, // zeile 1
                                { 0, 3 }, // zeile 2
                                { 1, 6 }, // zeile 3
                                { 2, 6 }, // zeile 4
                                { 2, 5 }, // zeile 5
                                { 4 }, // zeile 5
                };

                int[][] ownFigure1 = new int[][] { {}, // zeile 0
                                { 1, 7 }, // zeile 1
                                { 2, 7 }, // zeile 2
                                { 3, 7 }, // zeile 3
                                { 3, 7 }, // zeile 4
                                { 3, 7 }, // zeile 5

                };

                int[][] ownFigure2 = new int[][] { {}, // zeile 0
                                { 1, 7 }, // zeile 1
                                { 2, 7 }, // zeile 2
                                { 3, 7 }, // zeile 5
                };

                int[][] ownFigure3 = new int[][] { {}, // zeile 0
                                { 1, 7 }, // zeile 1
                                { 2, 9 }, // zeile 2
                                { 3, 7 }, // zeile 3
                };

                int[][] failownFigure1 = new int[][] { {}, // zeile 0
                                { 1, 7 }, // zeile 1
                                {}, // zeile 2
                                { 3, 7 }, // zeile 3
                };
                int[][] failownFigure2 = new int[][] { {}, // zeile 0
                                { 1, 7 }, // zeile 1
                                { 3, 7 }, // zeile 2
                                { 3 }, // zeile 3
                                { 3, 9 }, // zeile 3

                };
                // Umleitung der Ausgabe in die Datei Aufgabe2.txt
                System.setOut(new PrintStream(new FileOutputStream("Aufgabe3.txt")));
                System.out.println("Ausgabe für Aufgabe 3:");

                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(dreieck) + " Randpunkten: "
                                + polygonflaecheNachPick(dreieck));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(quadrat) + " Randpunkten: "
                                + polygonflaecheNachPick(quadrat));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(achteck) + " Randpunkten: "
                                + polygonflaecheNachPick(achteck));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(vieleck) + " Randpunkten: "
                                + polygonflaecheNachPick(vieleck));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(ownFigure1) + " Randpunkten: "
                                + polygonflaecheNachPick(ownFigure1));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(ownFigure2) + " Randpunkten: "
                                + polygonflaecheNachPick(ownFigure2));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(ownFigure3) + " Randpunkten: "
                                + polygonflaecheNachPick(ownFigure3));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(failownFigure1) + " Randpunkten: "
                                + polygonflaecheNachPick(failownFigure1));
                System.out.println("Fläche des Polgygons mit " + anzahlRandpunkte(failownFigure1) + " Randpunkten: "
                                + polygonflaecheNachPick(failownFigure1));
        }

        public static double polygonflaecheNachPick(int[][] randpunkte) {
                // constraint checking
                int i = 0;
                int startPointOfPolygon = 0;
                while (randpunkte[i].length == 0) {
                        i++;
                }
                i++;
                startPointOfPolygon = i;
                while (i < randpunkte.length - 1) {
                        if (randpunkte[i].length < 2) {
                                System.out.println("Polygon erfüllt die Kriterien nicht. (Zeile: " + i + ")");
                                return -1;
                        }
                        i++;
                }
                // calc amount inner points
                double amountInnerPoints = 0;
                for (int j = startPointOfPolygon; j < randpunkte.length - 1; j++) {
                        if (randpunkte[j].length == 2) {
                                amountInnerPoints += randpunkte[j][1] - randpunkte[j][0] - 1;
                        }
                }
                return amountInnerPoints + ((double) anzahlRandpunkte(randpunkte) / 2) - 1;

        }

        public static int anzahlRandpunkte(int[][] randpunkte) {
                int anzahlRandpunkte = 0;
                for (int zeile = 0; zeile < randpunkte.length; zeile++) {
                        anzahlRandpunkte += randpunkte[zeile].length;
                }
                return anzahlRandpunkte;
        }

}