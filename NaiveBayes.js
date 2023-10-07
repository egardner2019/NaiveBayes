// To run the program, run "node NaiveBayes.js" within this project in the terminal

import trainingActionableReviews from "./TrainingData/TrainingActionable";
import trainingUnactionableReviews from "./TrainingData/TrainingUnactionable";
import realActionableReviews from "./RealData/RealActionable";
import realUnactionableReviews from "./RealData/RealUnactionable";
import {
  calculateProbActionableOfRealReview,
  filterIncorrectlyLabelledReviews,
  getTotalByLabel,
  iterateThroughReviews,
} from "./HelperMethods";

const NaiveBayes = () => {
  // Preliminary work for steps 1 and 2
  // An object to keep track of the number of occurrences of each word in the training actionable/unactionable reviews
  let uniqueWordsInTrainingData = {};

  // Iterate through the actionable reviews.
  uniqueWordsInTrainingData = iterateThroughReviews(
    uniqueWordsInTrainingData,
    trainingActionableReviews,
    true
  );

  // Iterate through the unactionable reviews.
  uniqueWordsInTrainingData = iterateThroughReviews(
    uniqueWordsInTrainingData,
    trainingUnactionableReviews,
    false
  );

  // Compute the probabilities of each word in the training data set given that the review is actionable/unactionable
  let probWordsInTraining = {};
  Object.keys(uniqueWordsInTrainingData).forEach((word) => [
    (probWordsInTraining[word] = {
      // Step 1: compute the probability of each word in the training data set given that the review is actionable
      probGivenActionable:
        (uniqueWordsInTrainingData[word].actionable + 1) /
        (trainingActionableReviews.length + 2),
      // Step 2: compute the probability of each word in the training data set given that the review is unactionable
      probGivenUnactionable:
        (uniqueWordsInTrainingData[word].unactionable + 1) /
        (trainingUnactionableReviews.length + 2),
    }),
  ]);

  // Step 3: compute the probability of a review being actionable in the training data set
  const probActionable =
    trainingActionableReviews.length /
    (trainingActionableReviews.length + trainingUnactionableReviews.length);

  // Step 4: compute the probability of a review being unactionable in the training data set
  const probUnactionable =
    trainingUnactionableReviews.length /
    (trainingActionableReviews.length + trainingUnactionableReviews.length);

  // Step 5: calculate the probability that each review is actionable
  let actionableProbabilities = [];
  realActionableReviews.forEach((review, index) => {
    actionableProbabilities[index] = calculateProbActionableOfRealReview(
      review,
      probWordsInTraining,
      probActionable,
      probUnactionable
    );
  });
  let unactionableProbabilities = [];
  realUnactionableReviews.forEach((review, index) => {
    unactionableProbabilities[index] = calculateProbActionableOfRealReview(
      review,
      probWordsInTraining,
      probActionable,
      probUnactionable
    );
  });

  // Calculate the results
  // Figure out which actionable reviews were incorrectly labelled as unactionable
  const actionableIncorrectlyLabelled = filterIncorrectlyLabelledReviews(
    actionableProbabilities,
    true
  );
  // Figure out which unactionable reviews were incorrectly labelled as actionable
  const unactionableIncorrectlyLabelled = filterIncorrectlyLabelledReviews(
    unactionableProbabilities,
    true
  );

  // Gather all of the incorrectly labelled reviews
  const allIncorrectlyLabelledReviews = actionableIncorrectlyLabelled.concat(
    unactionableIncorrectlyLabelled
  );

  // Gather all of the labelled reviews
  const allLabelledReviews = actionableProbabilities.concat(
    unactionableProbabilities
  );

  // Calculate the overall accuracy of the Naive Bayes implementation
  const overallAccuracy =
    allIncorrectlyLabelledReviews / allLabelledReviews.length;

  // Calculate the total number of reviews labelled as actionable
  const totalLabelledActionable = getTotalByLabel(allLabelledReviews, true);

  // Calculate the total number of reviews labelled as unactionable
  const totalLabelledUnactionable = getTotalByLabel(allLabelledReviews, false);

  // Print the results to the console
  console.log("Overall Accuracy: " + overallAccuracy);
  console.log(
    "Number of reviews labelled as actionable: " + totalLabelledActionable
  );
  console.log(
    "Number of reviews labelled as unactionable: " + totalLabelledUnactionable
  );
  console.log(
    `The following ${actionableIncorrectlyLabelled.length} reviews are actionable but were labelled incorrectly as unactionable: `
  );
  actionableIncorrectlyLabelled.forEach((review) => console.log(review));

  console.log(
    `The following ${unactionableIncorrectlyLabelled.length} reviews are unactionable but were labelled incorrectly as actionable:`
  );
  unactionableIncorrectlyLabelled.forEach((review) => console.log(review));
};

// Run the program
NaiveBayes();
