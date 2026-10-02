# Recovery in Love — Product Specification

## Product definition
Recovery in Love is an adults-only dating platform for people who want relationships compatible with their recovery, lifestyle, and relationship goals.

Users can optionally explore attachment and personality characteristics, control what sensitive information is shared, receive compatibility-based recommendations, connect through mutual matching, and use built-in reporting, verification, and Trust & Safety tools.

## Main navigation
- Discover
- Matches
- Messages
- Recovery
- Profile
- Safety

## Matching model
### Hard filters
- Age range
- Gender/orientation
- Distance
- Relationship type
- Children preferences
- User-defined recovery boundaries
- Smoking, alcohol, and drug preferences

### Ranking signals
- Recovery compatibility
- Relationship goals
- Lifestyle
- Attachment result
- Enneagram result
- Communication preferences
- Interests
- Values
- Distance

## Explanation layer
The app should say why a person is being recommended, using factual structured overlap only.

Example:
“You both want a long-term relationship, prefer a substance-free household, value emotional communication, and are within 15 miles.”

Do not make unsupported psychological predictions.

## Recovery profile
Potential fields:
- Recovery status
- Recovery duration
- Continuous sobriety
- Recovery approach
- Substance-use boundaries
- Preferences about a partner’s alcohol/drug use
- Whether the user wants a sober partner
- Whether the user wants a partner in recovery
- Visibility settings

Precise recovery dates should not need to be public.

## Mental-health profile
Optional only.

Users choose:
- what they disclose
- who can see it
- whether it contributes to matching

## Assessments
The engineering layer should use provider abstractions for:
- Attachment
- Enneagram
- Recovery compatibility

Third-party proprietary assessment questions should not be copied into the product without appropriate rights.

## Safety
Every profile and conversation must support report, block, and unmatch.

Report categories include:
- Fake profile
- Impersonation
- Harassment
- Threats
- Sexual harassment
- Scam/fraud
- Financial solicitation
- Misrepresentation
- Relationship-status concern
- Substance-related safety concern
- Hate/abusive behavior
- Underage user
- Other

## Relationship verification
The platform should not create a public “claim this person” accusation board.

Supported flows:
1. Mutual relationship verification between two consenting adults.
2. Private relationship-status concern submitted to Trust & Safety.
3. Private supporting evidence available only to authorized moderation staff.

## Evidence
Evidence belongs in private object storage. The public app must never expose report evidence.

Prohibit uploads containing:
- passwords
- financial account credentials
- intimate images
- revenge pornography
- unnecessary third-party private information

## V1
- Registration/login
- Profile
- Photos
- Dating preferences
- Recovery profile
- Sobriety information
- Relationship goals
- Assessment-provider integration foundation
- Matching
- Like/pass
- Mutual matching
- Messaging
- Block
- Report
- Admin moderation foundation
- Account deletion
- Privacy controls
