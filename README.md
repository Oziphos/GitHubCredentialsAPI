## Routes d'api Github :

### Routes GET :

- **`<adresse_serveur>/api/repository`**

  - Description : Renvoie les informations générales du dépôt

  - <details>
          <summary>Retour</summary>

    ```json
    {
      "success": true,
      "data": {
        "id": 899168159,
        "node_id": "R_kgDONZg3nw",
        "name": "test",
        "full_name": "Oziphos/test",
        "private": false,
        "owner": {
          "login": "Oziphos",
          "id": 106010906,
          "node_id": "U_kgDOBlGZGg",
          "avatar_url": "https://avatars.githubusercontent.com/u/106010906?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Oziphos",
          "html_url": "https://github.com/Oziphos",
          "followers_url": "https://api.github.com/users/Oziphos/followers",
          "following_url": "https://api.github.com/users/Oziphos/following{/other_user}",
          "gists_url": "https://api.github.com/users/Oziphos/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Oziphos/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Oziphos/subscriptions",
          "organizations_url": "https://api.github.com/users/Oziphos/orgs",
          "repos_url": "https://api.github.com/users/Oziphos/repos",
          "events_url": "https://api.github.com/users/Oziphos/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Oziphos/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        "html_url": "https://github.com/Oziphos/test",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/Oziphos/test",
        "forks_url": "https://api.github.com/repos/Oziphos/test/forks",
        "keys_url": "https://api.github.com/repos/Oziphos/test/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Oziphos/test/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Oziphos/test/teams",
        "hooks_url": "https://api.github.com/repos/Oziphos/test/hooks",
        "issue_events_url": "https://api.github.com/repos/Oziphos/test/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Oziphos/test/events",
        "assignees_url": "https://api.github.com/repos/Oziphos/test/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Oziphos/test/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Oziphos/test/tags",
        "blobs_url": "https://api.github.com/repos/Oziphos/test/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Oziphos/test/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Oziphos/test/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Oziphos/test/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Oziphos/test/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Oziphos/test/languages",
        "stargazers_url": "https://api.github.com/repos/Oziphos/test/stargazers",
        "contributors_url": "https://api.github.com/repos/Oziphos/test/contributors",
        "subscribers_url": "https://api.github.com/repos/Oziphos/test/subscribers",
        "subscription_url": "https://api.github.com/repos/Oziphos/test/subscription",
        "commits_url": "https://api.github.com/repos/Oziphos/test/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Oziphos/test/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Oziphos/test/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Oziphos/test/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Oziphos/test/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Oziphos/test/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Oziphos/test/merges",
        "archive_url": "https://api.github.com/repos/Oziphos/test/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Oziphos/test/downloads",
        "issues_url": "https://api.github.com/repos/Oziphos/test/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Oziphos/test/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Oziphos/test/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Oziphos/test/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Oziphos/test/labels{/name}",
        "releases_url": "https://api.github.com/repos/Oziphos/test/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Oziphos/test/deployments",
        "created_at": "2024-12-05T18:41:25Z",
        "updated_at": "2024-12-05T19:04:35Z",
        "pushed_at": "2024-12-05T19:04:32Z",
        "git_url": "git://github.com/Oziphos/test.git",
        "ssh_url": "git@github.com:Oziphos/test.git",
        "clone_url": "https://github.com/Oziphos/test.git",
        "svn_url": "https://github.com/Oziphos/test",
        "homepage": null,
        "size": 2,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main",
        "permissions": {
          "admin": true,
          "maintain": true,
          "push": true,
          "triage": true,
          "pull": true
        },
        "temp_clone_token": "",
        "allow_squash_merge": true,
        "allow_merge_commit": true,
        "allow_rebase_merge": true,
        "allow_auto_merge": false,
        "delete_branch_on_merge": false,
        "allow_update_branch": false,
        "use_squash_pr_title_as_default": false,
        "squash_merge_commit_message": "COMMIT_MESSAGES",
        "squash_merge_commit_title": "COMMIT_OR_PR_TITLE",
        "merge_commit_message": "PR_TITLE",
        "merge_commit_title": "MERGE_MESSAGE",
        "security_and_analysis": {
          "secret_scanning": {
            "status": "enabled"
          },
          "secret_scanning_push_protection": {
            "status": "enabled"
          },
          "dependabot_security_updates": {
            "status": "disabled"
          },
          "secret_scanning_non_provider_patterns": {
            "status": "disabled"
          },
          "secret_scanning_validity_checks": {
            "status": "disabled"
          }
        },
        "network_count": 0,
        "subscribers_count": 1
      }
    }
    ```

        </details>

- **`<adresse_serveur>/api/branches`**

  - Description : Renvoie la liste des branches du dépôt

  - <details>
      <summary>Retour</summary>

    ```json
    {
      "success": true,
      "data": [
        {
          "name": "branch2",
          "commit": {
            "sha": "2a0f95083094d14114dcec216b09f29f1a2a9c2b",
            "url": "https://api.github.com/repos/Oziphos/test/commits/2a0f95083094d14114dcec216b09f29f1a2a9c2b"
          },
          "protected": false,
          "protection": {
            "enabled": false,
            "required_status_checks": {
              "enforcement_level": "off",
              "contexts": [],
              "checks": []
            }
          },
          "protection_url": "https://api.github.com/repos/Oziphos/test/branches/branch2/protection"
        },
        {
          "name": "main",
          "commit": {
            "sha": "a2c0ebde34d388a570996e743386a946f99e90ed",
            "url": "https://api.github.com/repos/Oziphos/test/commits/a2c0ebde34d388a570996e743386a946f99e90ed"
          },
          "protected": false,
          "protection": {
            "enabled": false,
            "required_status_checks": {
              "enforcement_level": "off",
              "contexts": [],
              "checks": []
            }
          },
          "protection_url": "https://api.github.com/repos/Oziphos/test/branches/main/protection"
        }
      ]
    }
    ```

    </details>

- **`<adresse_serveur>/api/commits`**

  - Description : Renvoie la liste des commits du dépôt

  - <details>
    <summary>Retour</summary>

    ```json
    {
      "success": true,
      "data": [
        {
          "sha": "a2c0ebde34d388a570996e743386a946f99e90ed",
          "node_id": "C_kwDONZg3n9oAKGEyYzBlYmRlMzRkMzg4YTU3MDk5NmU3NDMzODZhOTQ2Zjk5ZTkwZWQ",
          "commit": {
            "author": {
              "name": "Oziphos",
              "email": "106010906+Oziphos@users.noreply.github.com",
              "date": "2024-12-05T19:04:31Z"
            },
            "committer": {
              "name": "GitHub",
              "email": "noreply@github.com",
              "date": "2024-12-05T19:04:31Z"
            },
            "message": "Create README.md",
            "tree": {
              "sha": "f49ca8d178ef3d82dce40573b15699935a4472d4",
              "url": "https://api.github.com/repos/Oziphos/test/git/trees/f49ca8d178ef3d82dce40573b15699935a4472d4"
            },
            "url": "https://api.github.com/repos/Oziphos/test/git/commits/a2c0ebde34d388a570996e743386a946f99e90ed",
            "comment_count": 0,
            "verification": {
              "verified": true,
              "reason": "valid",
              "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnUfk/CRC1aQ7uu5UhlAAA9WYQAA1AIqnzKC6LXMLxjoBZGpZG\nR/xuBr9VzeII9YbQja6G6qEcAvxVnv1lW7ngorZrT7Q6umm2TRgIUSgTbJR/AHrC\n8Wm6QU8N6M0Xm7/h1BCHvQGu07leuYdM1nDG4qtPrK5zG+vbbF7VX+0WauAhEoGN\ngjh6udB5rTAdj22bD5Y6B7g3GU+EfY0lhyy2gfT7uApE8JGgWKsmTQYU86iJOpaQ\nVJ20xnfZNYWZP6PzqB4ZbmHgk9nT9mRr9DIafkC8VUze/maUW1w/xNNtE3BiI3ku\n+3GqhQo8vouzquO+ZhfqFOCHmGiKap7L5u2h99v/KMHjZZ2+zD344Nz3bpgNpq2g\nGnNWY0eY5170hxzuzhFJEdbnH9ksgKEHC5zUAW0M0Q6MlyBRXZxEjymYdyz0gDIY\nM6P2H0I/3TVOJYXSITwgVH4bsUN+oSgHMxgacThVLacGspOWBKd8WV+NZheI+zyj\nWGjHD9OGhpC/Yh2oFmSpoSFHzW7cpLA8t3ZslJleHdkfBQFmBLoBKFcPoYptBT61\nLwFxvaYQpOOdEcEDo/ikFj49Kti1FvsQdZbPbVLC+RJ7ECLv6GoWpekFSnQeZ/71\n3nX3juFpGx0jjod9/h/gzBq+i/4f/Dzmh3jxKM3Q6f0+5VVSE12mVk0blBZ/cDaj\nrgZJm1LebGeuznpnCWPb\n=6NFn\n-----END PGP SIGNATURE-----\n",
              "payload": "tree f49ca8d178ef3d82dce40573b15699935a4472d4\nparent 2a0f95083094d14114dcec216b09f29f1a2a9c2b\nauthor Oziphos \u003C106010906+Oziphos@users.noreply.github.com\u003E 1733425471 +0100\ncommitter GitHub \u003Cnoreply@github.com\u003E 1733425471 +0100\n\nCreate README.md",
              "verified_at": "2024-12-05T19:04:36Z"
            }
          },
          "url": "https://api.github.com/repos/Oziphos/test/commits/a2c0ebde34d388a570996e743386a946f99e90ed",
          "html_url": "https://github.com/Oziphos/test/commit/a2c0ebde34d388a570996e743386a946f99e90ed",
          "comments_url": "https://api.github.com/repos/Oziphos/test/commits/a2c0ebde34d388a570996e743386a946f99e90ed/comments",
          "author": {
            "login": "Oziphos",
            "id": 106010906,
            "node_id": "U_kgDOBlGZGg",
            "avatar_url": "https://avatars.githubusercontent.com/u/106010906?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Oziphos",
            "html_url": "https://github.com/Oziphos",
            "followers_url": "https://api.github.com/users/Oziphos/followers",
            "following_url": "https://api.github.com/users/Oziphos/following{/other_user}",
            "gists_url": "https://api.github.com/users/Oziphos/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Oziphos/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Oziphos/subscriptions",
            "organizations_url": "https://api.github.com/users/Oziphos/orgs",
            "repos_url": "https://api.github.com/users/Oziphos/repos",
            "events_url": "https://api.github.com/users/Oziphos/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Oziphos/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
          },
          "committer": {
            "login": "web-flow",
            "id": 19864447,
            "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
            "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/web-flow",
            "html_url": "https://github.com/web-flow",
            "followers_url": "https://api.github.com/users/web-flow/followers",
            "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
            "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
            "organizations_url": "https://api.github.com/users/web-flow/orgs",
            "repos_url": "https://api.github.com/users/web-flow/repos",
            "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
            "received_events_url": "https://api.github.com/users/web-flow/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
          },
          "parents": [
            {
              "sha": "2a0f95083094d14114dcec216b09f29f1a2a9c2b",
              "url": "https://api.github.com/repos/Oziphos/test/commits/2a0f95083094d14114dcec216b09f29f1a2a9c2b",
              "html_url": "https://github.com/Oziphos/test/commit/2a0f95083094d14114dcec216b09f29f1a2a9c2b"
            }
          ]
        },
        {
          "sha": "2a0f95083094d14114dcec216b09f29f1a2a9c2b",
          "node_id": "C_kwDONZg3n9oAKDJhMGY5NTA4MzA5NGQxNDExNGRjZWMyMTZiMDlmMjlmMWEyYTljMmI",
          "commit": {
            "author": {
              "name": "Oziphos",
              "email": "106010906+Oziphos@users.noreply.github.com",
              "date": "2024-12-05T18:42:28Z"
            },
            "committer": {
              "name": "GitHub",
              "email": "noreply@github.com",
              "date": "2024-12-05T18:42:28Z"
            },
            "message": "Create blank.yml",
            "tree": {
              "sha": "a127940a2c22141cbabc717f515dc98d816b9c73",
              "url": "https://api.github.com/repos/Oziphos/test/git/trees/a127940a2c22141cbabc717f515dc98d816b9c73"
            },
            "url": "https://api.github.com/repos/Oziphos/test/git/commits/2a0f95083094d14114dcec216b09f29f1a2a9c2b",
            "comment_count": 0,
            "verification": {
              "verified": true,
              "reason": "valid",
              "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJnUfQUCRC1aQ7uu5UhlAAAZAYQAEDlrwTwQAJc9KZNmYY7/KQu\ncAz3MG/5454zQOuMZn667xrLSuYtj1NJgzAJ4+KxYb0SoLafkS2KqhbU+Yg+u/mE\n8BZx9VPPu5W2zeJV7fBhCkfGQRY0EADym7cTxtpTE2ne7smqjjoe9azfRi2/CoQm\n3pQSOHG6437e7A4V4hgXaLgMHktSs8ffcFzhMGh4XDcvRcNuXHvmKVcW5o5B8rdw\nacCDWVEc+YRspsV7qB3A8Z/DzrhXIm5l/FN+MMxu4myH/oHRUaz55yjJoJHewl1G\nih/1uKJmKkaUd4mhTDLgcFjRGYbJdO2eBZ2rKwBde3XQNzcrb3xPkgmRdRvd7NXA\nm/i48ohvoevvKGdHKuRlbIzNGOuolCCl5YKIbGgqHkU2hjQOV7yXrIBPEOHfGcRN\ndgixF3c707azzMZ2HZ43sysWTEG4n2zATOdc++oxgHZ0/UoIByZUzPq5cfd6E/7o\n+GgBfMExg7XbB4J2EZSbeEin98wzW7rAp0arkFFMu46y106zPLWgUM+EH5wvFbu3\n7AWFCD+MVsCUvhZa9uh3wDovQj2iw0aLImXck8PVqtafEc8AnxBqldlge/lIilX1\n2E1aCcr5U9R6aj5/gDxg5Jp/389UUOsD0gWKuiw//aJE3saWiCVE3rkZRsbpCEBh\nDyUzTtvfCV4jlEySzdcB\n=y8my\n-----END PGP SIGNATURE-----\n",
              "payload": "tree a127940a2c22141cbabc717f515dc98d816b9c73\nauthor Oziphos \u003C106010906+Oziphos@users.noreply.github.com\u003E 1733424148 +0100\ncommitter GitHub \u003Cnoreply@github.com\u003E 1733424148 +0100\n\nCreate blank.yml",
              "verified_at": "2024-12-05T18:43:33Z"
            }
          },
          "url": "https://api.github.com/repos/Oziphos/test/commits/2a0f95083094d14114dcec216b09f29f1a2a9c2b",
          "html_url": "https://github.com/Oziphos/test/commit/2a0f95083094d14114dcec216b09f29f1a2a9c2b",
          "comments_url": "https://api.github.com/repos/Oziphos/test/commits/2a0f95083094d14114dcec216b09f29f1a2a9c2b/comments",
          "author": {
            "login": "Oziphos",
            "id": 106010906,
            "node_id": "U_kgDOBlGZGg",
            "avatar_url": "https://avatars.githubusercontent.com/u/106010906?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Oziphos",
            "html_url": "https://github.com/Oziphos",
            "followers_url": "https://api.github.com/users/Oziphos/followers",
            "following_url": "https://api.github.com/users/Oziphos/following{/other_user}",
            "gists_url": "https://api.github.com/users/Oziphos/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Oziphos/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Oziphos/subscriptions",
            "organizations_url": "https://api.github.com/users/Oziphos/orgs",
            "repos_url": "https://api.github.com/users/Oziphos/repos",
            "events_url": "https://api.github.com/users/Oziphos/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Oziphos/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
          },
          "committer": {
            "login": "web-flow",
            "id": 19864447,
            "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
            "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/web-flow",
            "html_url": "https://github.com/web-flow",
            "followers_url": "https://api.github.com/users/web-flow/followers",
            "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
            "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
            "organizations_url": "https://api.github.com/users/web-flow/orgs",
            "repos_url": "https://api.github.com/users/web-flow/repos",
            "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
            "received_events_url": "https://api.github.com/users/web-flow/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false
          },
          "parents": []
        }
      ]
    }
    ```

    </details>

- **`<adresse_serveur>/api/users`**

  - Description : Renvoie la liste des collaborateurs du dépôt

  - <details>
    <summary>Retour</summary>

    ```json
    {
      "success": true,
      "data": [
        {
          "login": "Oziphos",
          "id": 106010906,
          "node_id": "U_kgDOBlGZGg",
          "avatar_url": "https://avatars.githubusercontent.com/u/106010906?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Oziphos",
          "html_url": "https://github.com/Oziphos",
          "followers_url": "https://api.github.com/users/Oziphos/followers",
          "following_url": "https://api.github.com/users/Oziphos/following{/other_user}",
          "gists_url": "https://api.github.com/users/Oziphos/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Oziphos/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Oziphos/subscriptions",
          "organizations_url": "https://api.github.com/users/Oziphos/orgs",
          "repos_url": "https://api.github.com/users/Oziphos/repos",
          "events_url": "https://api.github.com/users/Oziphos/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Oziphos/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false,
          "permissions": {
            "admin": true,
            "maintain": true,
            "push": true,
            "triage": true,
            "pull": true
          },
          "role_name": "admin"
        }
      ]
    }
    ```

  </details>
