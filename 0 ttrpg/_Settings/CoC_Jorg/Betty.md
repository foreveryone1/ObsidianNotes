---
cssclass: kanban, coc
age: 19
str: 30
con: 40
siz: 60
dex: 70
app: 70
edu: 70
int: 65
pow: 50
---
- ## 1920s Investigator
	- Name: Betty
	- Occupation: Student/Intern
	- Age: 19
	- Sex: F
	- Residence:  Draalst
	- Birthplace: Lincoln
	- <i id="tooltip" title="Both DEX and STR are each less than SIZ: 7 &#013;Either STR or DEX is equal to or greater than SIZ: 8 &#013;Both STR and DEX are each greater than SIZ: 9&#013;Per decade older than 30 (not including your 30s) 1 MOV penalty."> Move Rate </i> : 8 %% Check patchnotes for dynamic variable setting %%
- # Characteristics
	- **Str**:\: **`=this.str`** | `=this.str/2` | `=this.str/5`
	- **Con**:\: **`=this.con`** | `=this.con/2` | `=this.con/5`
	- **Siz**:\: **`=this.siz`** | `=this.siz/2` | `=this.siz/5`
	- **Dex**:\: **`=this.dex`** | `=this.dex/2` | `=this.dex/5`
	- **App**:\: **`=this.app`** | `=this.app/2` | `=this.app/5`
	- **Edu**:\: **`=this.edu`** | `=this.edu/2` | `=this.edu/5`
	- **Int**:\: **`=this.int`** | `=this.int/2` | `=this.int/5`
	- **Pow**:\: **`=this.pow`** | `=this.pow/2` | `=this.pow/5`
- ## Portrait
	- ![[Pasted image 20210509190806.png]]

## Hitpoints, Luck, MP, and Sanity
- ## Hit points
	- Max:\: `=(this.siz+this.con)/10`
	- Current:\: 8
- ## Luck
	- Current:\: 40
- ## MP
	- Max:\:`=this.pow/5`
	- Current:\: n/a
- ## Sanity
	- Max:\:`=this.pow`
	- Current:\: 40
%% Take >= 5 sanity damage in one instance - indefinitely insane
Lose all sanity - lose your character forever%%
# Skills
- # Text
	- [ ] Accounting:: 5
		 - `=this.accounting / 2` | `=this.accounting / 5`
	- [ ] Acting:: 60
		 - `=this.acting / 2` | `=this.acting / 5`
	- [ ] Anthropology:: 1
		 - `=this.anthropology / 2` | `=this.anthropology / 5`
	- [ ] Appraise:: 5
		 - `=this.appraise / 2` | `=this.appraise / 5`
	- [ ] Archaeology:: 1
		 - `=this.archaeology / 2` | `=this.archaeology / 5`
	- [ ] Brawl:: 25
		 - `=this.brawl / 2` | `=this.brawl / 5`
	- [ ] Charm:: 80
		 - `=this.charm / 2` | `=this.charm / 5`
	- [ ] Climb:: 20
		 - `=this.climb / 2` | `=this.climb / 5`
	- [ ] Credit rating:: 65
		 - `=this.credit-rating / 2` | `=this.credit-rating / 5`
	- [ ] Cthulhu mythos:: 2
		 - `=this.cthulhu-mythos / 2` | `=this.cthulhu-mythos / 5`
	- [ ] Disguise:: 5
		 - `=this.disguise / 2` | `=this.disguise / 5`
	- [ ] Dodge:: 70
		 - `=this.dodge / 2` | `=this.dodge / 5`
	- [ ] Drive auto:: 20
		 - `=this.drive-auto / 2` | `=this.drive-auto / 5`
	- [ ] Elec repair:: 10
		 - `=this.elec-repair / 2` | `=this.elec-repair / 5`
	- [ ] Fast talk:: 5
		 - `=this.fast-talk / 2` | `=this.fast-talk / 5`
	- [ ] First aid:: 30
		 - `=this.first-aid / 2` | `=this.first-aid / 5`
- #
	- [ ] Handgun:: 50
		 - `=this.handgun / 2` | `=this.handgun / 5`
	- [ ] Heavy machine:: 1
		 - `=this.heavy-machine / 2` | `=this.heavy-machine / 5`
	- [ ] History:: 5
		 - `=this.history / 2` | `=this.history / 5`
	- [ ] Intimidate:: 15
		 - `=this.intimidate / 2` | `=this.intimidate / 5`
	- [ ] Jump:: 20
		 - `=this.jump / 2` | `=this.jump / 5`
	- [ ] Lang-English:: 70
		 - `=this.Lang-English / 2` | `=this.Lang-English / 5`
	- [ ] Lang-French:: 31
		 - `=this.lang-french / 2` | `=this.lang-french / 5`
	- [ ] Lang-Sumerian:: 5
		 - `=this.lang-sumerian / 2` | `=this.lang-sumerian / 5`
	- [ ] Law:: 5
		 - `=this.law / 2` | `=this.law / 5`
	- [ ] Library:: 40
		 - `=this.library / 2` | `=this.library / 5`
	- [ ] Listen:: 40
		 - `=this.listen / 2` | `=this.listen / 5`
	- [ ] Locksmith:: 1
		 - `=this.locksmith / 2` | `=this.locksmith / 5`
	- [ ] Longarms:: 25
		 - `=this.longarms / 2` | `=this.longarms / 5`
	- [ ] Mech repair:: 10
		 - `=this.mech-repair / 2` | `=this.mech-repair / 5`
	- [ ] Medicine:: 1
		 - `=this.medicine / 2` | `=this.medicine / 5`
	- [ ] Natural world:: 10
		 - `=this.natural-world / 2` | `=this.natural-world / 5`
	- [ ] Navigate:: 10
		 - `=this.navigate / 2` | `=this.navigate / 5`
 - #
	- [ ] Occult:: 5
		 - `=this.occult / 2` | `=this.occult / 5`
	- [ ] Persuade:: 10
		 - `=this.persuade / 2` | `=this.persuade / 5`
	- [ ] Pilot:: 1
		 - `=this.pilot / 2` | `=this.pilot / 5`
	- [ ] Psychoanalysis:: 50
		 - `=this.psychoanalysis / 2` | `=this.psychoanalysis / 5`
	- [ ] Psychology:: 50
		 - `=this.psychology / 2` | `=this.psychology / 5`
	- [ ] Ride:: 5
		 - `=this.ride / 2` | `=this.ride / 5`
	- [ ] Science:: 1
		 - `=this.science / 2` | `=this.science / 5`
	- [ ] Sleight of hand:: 10
		 - `=this.sleight-of-hand / 2` | `=this.sleight-of-hand / 5`
	- [ ] Spot hidden:: 59
		 - `=this.spot-hidden / 2` | `=this.spot-hidden / 5`
	- [ ] Stealth:: 20
		 - `=this.stealth / 2` | `=this.stealth / 5`
	- [ ] Survival:: 10
		 - `=this.survival / 2` | `=this.survival / 5`
	- [ ] Swim:: 20
		 - `=this.swim / 2` | `=this.swim / 5`
	- [ ] Throw:: 20
		 - `=this.throw / 2` | `=this.throw / 5`
	- [ ] Track:: 10
		 - `=this.track / 2` | `=this.track / 5`


# Combat 
**<i id="tooltip" title="< 65: -2&#013;< 85: -1&#013;< 125: 0&#013;< 165: +1D4&#013;< 205: +1D6&#013;< 285: +2D6&#013;< 365: +3D6&#013;< 445: + 4D6&#013;< 525: + 5D6"> Str + Size:\: `=this.str + this.siz`</i>**
**DB**:: "0"
**Dodge**:\: `=this.dodge` | `=this.dodge / 2` | `=this.dodge / 5`

| Weapon     | Regular       | Hard            | Extreme           | Damage           | Range | Attacks | Ammo | Malf |
| ---------- | ------------- | --------------- | ----------------- | ---------------- | ----- | ------- | ---- | ---- |
| Unarmed    | `=this.brawl` | `=this.brawl/2` | `=this.brawl / 5` | 1d3 + `=this.db` | -     | 1       | -    | -    |
| Breadknife | `=this.brawl` | `=this.brawl/2` | `=this.brawl / 5` | 1d4 + `=this.db` | -     | 1       | -    | -    | 
| Derringer | `=this.handgun` | `=this.handgun/2` | `=this.handgun / 5` | 1d6  | 3 yds     | 1       | 1    | 100   | 
# Backstory
- # 
	- **Personal description**: life-loving laughing individual
	- **Ideology/beliefs**: woman's suffrage (yass)
	- **Significant people**: my college professor <3 <br> my 'handsome' uncle Philip <br> my lovely tenants
	- **Meaningful locations**: my father's beach house
- #
	- **Treasured possession**: my dried flower tiara 
	- **Traits**: slightly manipulative
	- **Injuries**: n/a
	- **Phobias & Manias**: drowning / drowned people 
	- **Arcane Tomes**: n/a
	- **Encounters with strange entities**: Innes' killer

# Material Possessions
- ## Gear 
	- Flapper dress
	- Tiara
	- Feathers
- ## Money
	- Spending level: $50
	- Cash: `=this.credit-rating * 5`
	- Assets: `=this.credit-rating * 500`
		- Inherited cigarette holder
		- beach chalet
		- small house
		- small house
		- beach buggy
