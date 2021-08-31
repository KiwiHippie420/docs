// This is an AllowList of GitHub Actions that are approved for use in this project.
// If a new or existing workflow file is updated to use an action or action version not listed here,
// CI will fail and the action will need to be audited by the docs engineering team before it
// can be added it this list.

export default [
  'actions/checkout@5a4ac9002d0be2fb38bd78e4b4dbde5606d7042f', // v2.3.4
  'actions/github-script@2b34a689ec86a68d8ab9478298f91d5401337b7d', // v4.0.2
  'actions/labeler@5f867a63be70efff62b767459b009290364495eb', // v2.2.0
  'actions/setup-node@38d90ce44d5275ad62cc48384b3d8a58c500bb5f', // v2.2.0
  'actions/stale@9d6f46564a515a9ea11e7762ab3957ee58ca50da', // v3.0.16
  'actions/upload-artifact@27121b0bdffd731efa15d66772be8dc71245d074', // v2.2.4
  'alex-page/github-project-automation-plus@fdb7991b72040d611e1123d2b75ff10eda9372c9',
  'andymckay/labeler@22d5392de2b725cea4b284df5824125054049d84',
  'crowdin/github-action@fd9429dd63d6c0f8a8cb4b93ad8076990bd6e688',
  'crykn/copy_folder_to_another_repo_action@0282e8b9fef06de92ddcae9fe6cb44df6226646c',
  'cschleiden/actions-linter@caffd707beda4fc6083926a3dff48444bc7c24aa', // uses github-actions-parser v0.23.0
  'dawidd6/action-delete-branch@47743101a121ad657031e6704086271ca81b1911', // v3.0.2
  'dawidd6/action-download-artifact@b9571484721e8187f1fd08147b497129f8972c74', // v2.14.0
  'docker://chinthakagodawita/autoupdate-action:v1',
  'dorny/paths-filter@eb75a1edc117d3756a18ef89958ee59f9500ba58',
  'github/codeql-action/analyze@v1',
  'github/codeql-action/init@v1',
  'juliangruber/approve-pull-request-action@c530832d4d346c597332e20e03605aa94fa150a8',
  'juliangruber/find-pull-request-action@db875662766249c049b2dcd85293892d61cb0b51', // v1.5.0
  'juliangruber/read-file-action@e0a316da496006ffd19142f0fd594a1783f3b512',
  'lee-dohm/no-response@9bb0a4b5e6a45046f00353d5de7d90fb8bd773bb',
  'pascalgn/automerge-action@c9bd1823770819dc8fb8a5db2d11a3a95fbe9b07', // v0.12.0
  'peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e',
  'peter-evans/create-or-update-comment@5221bf4aa615e5c6e95bb142f9673a9c791be2cd',
  'peter-evans/create-pull-request@8c603dbb04b917a9fc2dd991dc54fef54b640b43',
  'peter-evans/find-comment@0da1f4fc1f20cd898368bd56089d391df418f52f',
  'rachmari/actions-add-new-issue-to-column@1a459ef92308ba7c9c9dc2fcdd72f232495574a9',
  'rachmari/labeler@832d42ec5523f3c6d46e8168de71cd54363e3e2e',
  'repo-sync/github-sync@3832fe8e2be32372e1b3970bbae8e7079edeec88',
  'repo-sync/pull-request@33777245b1aace1a58c87a29c90321aa7a74bd7d',
  'someimportantcompany/github-actions-slack-message@0b470c14b39da4260ed9e3f9a4f1298a74ccdefd',
  'tjenkinson/gh-action-auto-merge-dependency-updates@4d7756c04d9d999c5968697a621b81c47f533d61',
  'Bhacaz/checkout-files@c8f01756bfd894ba746d5bf48205e19000b0742b', // v1.0.0
  'EndBug/add-and-commit@2bdc0a61a03738a1d1bda24d566ad0dbe3083d87',
]
