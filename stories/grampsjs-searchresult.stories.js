import { html } from 'lit-html';
import '../src/components/GrampsjsSearchResults.js';

export default {
  title: 'grampsjs-searchresults',
};

const strings = {'Enclosed by': 'Teil von', 'Associations': 'Verknüpfungen', 'and': 'und', 'Addresses': 'Adressen', 'Attributes': 'Attribute', 'Author': 'Autor', 'Birth Date': 'Geburtsdatum', 'Borough': 'Borough', 'Building': 'Gebäude', 'Children': 'Kinder', 'Citation': 'Fundstelle', 'Citations': 'Fundstellen', 'City': 'Stadt', 'Country': 'Land', 'County': 'Kreis', 'Custom': 'Selbst definiert', 'Dashboard': 'Gramplet Werkzeugbank', 'Database overview': 'Datenbankübersicht', 'Date': 'Datum', 'Death Date': 'Sterbedatum', 'Department': 'Amt', 'Description': 'Beschreibung', 'Details': 'Details', 'District': 'Bezirk', 'Event': 'Ereignis', 'Event Type': 'Ereignisart', 'Events': 'Ereignisse', 'Families': 'Familien', 'Family Tree': 'Stammbaum', 'Family': 'Familie', 'Farm': 'Hof', 'Father': 'Vater', 'Gallery': 'Galerie', 'Given name': 'Vorname', 'Gramps ID': 'Gramps-ID', 'Hamlet': 'Weiler', 'Home Page': 'Homepage', 'in': 'in', 'Locality': 'Lokalität', 'Map': 'Karte', 'Marriage Date': 'Hochzeitsdatum', 'Married': 'Verheiratet', 'Media': 'Medien', 'Mother': 'Mutter', 'Municipality': 'Gemeinde', 'Name': 'Name', 'Neighborhood': 'Viertel', 'Note': 'Notiz', 'Notes': 'Notizen', 'Number of events': 'Anzahl der Ereignisse', 'Number of families': 'Familienanzahl', 'Number of generations:': 'Anzahl der Generationen:', 'Number of individuals': 'Personenzahl', 'Number of places': 'Anzahl der Orte', 'Number': 'Standortnummer/Signatur', 'Parents': 'Eltern', 'Parish': 'Kirchengemeinde', 'People': 'Personen', 'Place': 'Ort', 'Places': 'Orte', 'Primary': 'Primär', 'Province': 'Provinz', 'Publication info': 'Veröffentlichungsinformation', 'References': 'Referenzen', 'Region': 'Region', 'Relationships': 'Beziehungen', 'Repositories': 'Aufbewahrungsorte', 'Repository': 'Aufbewahrungsort', 'Siblings': 'Geschwister', 'Source': 'Quelle', 'Sources': 'Quellen', 'Spouses': '(Ehe-)Partner', 'State': 'Bundesland', 'Street': 'Straße', 'Surname': 'Nachname', 'Town': 'Kleinstadt', 'Type': 'Art', 'Unknown': 'Unbekannt', 'Village': 'Dorf', 'Zoom': 'Zoom'}



const searchResult = [{"handle": "PEHKQCLO1XRIJ7XGXJ", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d26ad495cc61120"], "death_ref_index": -1, "event_ref_list": [], "family_list": ["RN8KQCBEK93TPMJWA9"], "gender": 1, "gramps_id": "I1213", "handle": "PEHKQCLO1XRIJ7XGXJ", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": [], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Gabriel Gustave", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "山本"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "PEHKQCLO1XRIJ7XGXJ", "name_given": "Gabriel Gustave", "name_surname": "山本", "sex": "M"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 0, "score": 19.752772744137655}, {"handle": "5LOKQCTTFBF6I04744", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": 0, "change": 1185438865, "citation_list": ["c140d24e377760dca38"], "death_ref_index": -1, "event_ref_list": [{"attribute_list": [], "note_list": [], "private": false, "ref": "a5af0ebe0525c7c358a", "role": "Primary"}], "family_list": [], "gender": 1, "gramps_id": "I1593", "handle": "5LOKQCTTFBF6I04744", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": ["RN8KQCRK6TQ9IBQESJ"], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Gabriel Gustav", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "山本"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {"date": "1672-10-12", "place": "Tallahassee, FL", "type": "Geburt"}, "death": {}, "handle": "5LOKQCTTFBF6I04744", "name_given": "Gabriel Gustav", "name_surname": "山本", "sex": "M"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 1, "score": 17.51660178231115}, {"handle": "a5af0ebe0525c7c358a", "object": {"attribute_list": [], "change": 1284030605, "citation_list": [], "date": {"calendar": 0, "dateval": [12, 10, 1672, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2332031, "text": "", "year": 1672}, "description": "Birth of 山本, Gabriel Gustav", "gramps_id": "E0713", "handle": "a5af0ebe0525c7c358a", "media_list": [], "note_list": [], "place": "ELOKQC7O7M2JT7GUUO", "private": false, "profile": {"date": "1672-10-12", "place": "Tallahassee, FL", "type": "Geburt"}, "tag_list": [], "type": "Birth"}, "object_type": "event", "rank": 2, "score": 16.361497293268886}, {"handle": "a5af0ed98b711a5f341", "object": {"attribute_list": [], "change": 1284030627, "citation_list": [], "date": {"calendar": 0, "dateval": [2, 12, 1991, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2448593, "text": "", "year": 1991}, "description": "Marriage of Garner, Mark Gerard and Gibbs, Lori", "gramps_id": "E3013", "handle": "a5af0ed98b711a5f341", "media_list": [], "note_list": [], "place": "", "private": false, "profile": {"date": "1991-12-02", "place": "", "type": "Hochzeit"}, "tag_list": [], "type": "Marriage"}, "object_type": "event", "rank": 3, "score": 14.197351136756716}, {"handle": "A0IKQC38A2G8OBVEH", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d255440491fafca"], "death_ref_index": -1, "event_ref_list": [], "family_list": [], "gender": 1, "gramps_id": "I1258", "handle": "A0IKQC38A2G8OBVEH", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": ["UPTJQC4VPCABZUDB75"], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Greenleaf", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Warner"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "A0IKQC38A2G8OBVEH", "name_given": "Greenleaf", "name_surname": "Warner", "sex": "M"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 4, "score": 13.335372128777605}, {"handle": "OX5KQCKE3I94MEPDC", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d26a2391cc02074"], "death_ref_index": -1, "event_ref_list": [], "family_list": [], "gender": 0, "gramps_id": "I0648", "handle": "OX5KQCKE3I94MEPDC", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": ["6I5KQCOJMIS243LCE"], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Georgia", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Яковлев"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "OX5KQCKE3I94MEPDC", "name_given": "Georgia", "name_surname": "Яковлев", "sex": "F"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 5, "score": 13.335372128777605}, {"handle": "SQ6LQCK58EP1VCZV9N", "object": {"alt_loc": [], "alt_names": [], "change": 1234390474, "citation_list": [], "code": "", "gramps_id": "P1535", "handle": "SQ6LQCK58EP1VCZV9N", "lat": "34.2978794", "long": "-83.8240663", "media_list": [], "name": {"date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "lang": "", "value": "Gainesville"}, "note_list": [], "place_type": "City", "placeref_list": [{"date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "ref": "c965872663c4c8af9f11c11e94a"}], "private": false, "tag_list": [], "title": "Gainesville, GA", "urls": []}, "object_type": "place", "rank": 6, "score": 13.272563898611851}, {"handle": "a5af0eb96c0190be892", "object": {"attribute_list": [], "change": 1284030609, "citation_list": [], "date": {"calendar": 0, "dateval": [5, 10, 1983, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2445613, "text": "", "year": 1983}, "description": "Birth of Garner, Stephen Gerard", "gramps_id": "E0336", "handle": "a5af0eb96c0190be892", "media_list": [], "note_list": [], "place": "5HTJQCSB91P69HY731", "private": false, "profile": {"date": "1983-10-05", "place": "Ottawa, IL", "type": "Geburt"}, "tag_list": [], "type": "Birth"}, "object_type": "event", "rank": 7, "score": 13.224399393929057}, {"handle": "a5af0ebf4e936c826c3", "object": {"attribute_list": [], "change": 1284030604, "citation_list": [], "date": {"calendar": 0, "dateval": [31, 7, 1955, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2435320, "text": "", "year": 1955}, "description": "Birth of Garner, Gerard Stephen", "gramps_id": "E0808", "handle": "a5af0ebf4e936c826c3", "media_list": [], "note_list": [], "place": "5HTJQCSB91P69HY731", "private": false, "profile": {"date": "1955-07-31", "place": "Ottawa, IL", "type": "Geburt"}, "tag_list": [], "type": "Birth"}, "object_type": "event", "rank": 8, "score": 13.224399393929057}, {"handle": "a5af0ec175b03593b15", "object": {"attribute_list": [], "change": 1284030608, "citation_list": [], "date": {"calendar": 0, "dateval": [16, 10, 1962, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2437954, "text": "", "year": 1962}, "description": "Birth of Garner, Mark Gerard", "gramps_id": "E0986", "handle": "a5af0ec175b03593b15", "media_list": [], "note_list": [], "place": "5HTJQCSB91P69HY731", "private": false, "profile": {"date": "1962-10-16", "place": "Ottawa, IL", "type": "Geburt"}, "tag_list": [], "type": "Birth"}, "object_type": "event", "rank": 9, "score": 13.224399393929057}, {"handle": "a5af0ed959d396bc61b", "object": {"attribute_list": [], "change": 1284030621, "citation_list": [], "date": {"calendar": 0, "dateval": [6, 1, 1979, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2443880, "text": "", "year": 1979}, "description": "Marriage of Garner, Gerard Stephen and George, Elizabeth", "gramps_id": "E2992", "handle": "a5af0ed959d396bc61b", "media_list": [], "note_list": [], "place": "ED3LQCTE2LONLAGNON", "private": false, "profile": {"date": "1979-01-06", "place": "Farmington, MO", "type": "Hochzeit"}, "tag_list": [], "type": "Marriage"}, "object_type": "event", "rank": 10, "score": 13.037299349032134}, {"handle": "MP4KQCFV20FWEX005L", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d2674cd0b37030e"], "death_ref_index": -1, "event_ref_list": [], "family_list": ["FP4KQCQQX8O84KK3IF"], "gender": 1, "gramps_id": "I0588", "handle": "MP4KQCFV20FWEX005L", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": [], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Guy", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Логинов"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "MP4KQCFV20FWEX005L", "name_given": "Guy", "name_surname": "Логинов", "sex": "M"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 11, "score": 12.890519216521799}, {"handle": "a5af0ed984657d570bb", "object": {"attribute_list": [], "change": 1284030626, "citation_list": [], "date": {"calendar": 0, "dateval": [25, 1, 1976, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2442803, "text": "", "year": 1976}, "description": "Marriage of Garner, Peter George and Gibbs, Joy", "gramps_id": "E3010", "handle": "a5af0ed984657d570bb", "media_list": [], "note_list": [], "place": "", "private": false, "profile": {"date": "1976-01-25", "place": "", "type": "Hochzeit"}, "tag_list": [], "type": "Marriage"}, "object_type": "event", "rank": 12, "score": 12.484969625090777}, {"handle": "B3BKQCSV0G3NKSKWDX", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": 0, "change": 1502187344, "citation_list": ["c140d256ec4306a51ca"], "death_ref_index": -1, "event_ref_list": [{"attribute_list": [], "note_list": [], "private": false, "ref": "a5af0ed2cf617169903", "role": "Primary"}, {"attribute_list": [{"citation_list": ["c140dafeb317af2fd79"], "note_list": [], "private": false, "type": "Age", "value": "23"}], "note_list": [], "private": false, "ref": "a5af0ed5df832ee65c1", "role": "Clergy"}], "family_list": [], "gender": 0, "gramps_id": "I0880", "handle": "B3BKQCSV0G3NKSKWDX", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": ["1BVJQCNTFAGS8273LJ"], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "L. J.", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Blanco"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {"date": "1856", "place": "Cambridge, OH", "type": "Geburt"}, "death": {}, "handle": "B3BKQCSV0G3NKSKWDX", "name_given": "L. J.", "name_surname": "Blanco", "sex": "F"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 13, "score": 11.537932559076513}, {"handle": "Y4TKQCSIKXBWSJY94", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d27d9ac5f42edd5"], "death_ref_index": -1, "event_ref_list": [{"attribute_list": [], "note_list": [], "private": false, "ref": "a5af0ec06fe0c59cf7a", "role": "Primary"}], "family_list": ["PX9KQCTHVKMB2FSJG1"], "gender": 1, "gramps_id": "I1778", "handle": "Y4TKQCSIKXBWSJY94", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": [], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Gerry", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Hart"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "Y4TKQCSIKXBWSJY94", "name_given": "Gerry", "name_surname": "Hart", "sex": "M"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 14, "score": 11.537932559076513}, {"handle": "Y96KQC75116NCDFZTH", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d27dc897a1405f4"], "death_ref_index": -1, "event_ref_list": [], "family_list": ["C96KQCU6KPDH2FVYRT"], "gender": 0, "gramps_id": "I0673", "handle": "Y96KQC75116NCDFZTH", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": [], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Angela Gay", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Pérez"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "Y96KQC75116NCDFZTH", "name_given": "Angela Gay", "name_surname": "Pérez", "sex": "F"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 15, "score": 11.537932559076513}, {"handle": "2R3KQCRJWDM9ZZPKDJ", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d249b5a5edd2a1c"], "death_ref_index": -1, "event_ref_list": [], "family_list": ["VQ3KQC0QT2LMMUOGKA"], "gender": 0, "gramps_id": "I0538", "handle": "2R3KQCRJWDM9ZZPKDJ", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": [], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Annabell Gordon", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Жуков"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "2R3KQCRJWDM9ZZPKDJ", "name_given": "Annabell Gordon", "name_surname": "Жуков", "sex": "F"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 16, "score": 11.255422878005376}, {"handle": "a5af0ec0f4541dcef90", "object": {"attribute_list": [], "change": 1284030612, "citation_list": [], "date": {"calendar": 0, "dateval": [5, 8, 1954, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2434960, "text": "", "year": 1954}, "description": "Birth of Garner, Peter George", "gramps_id": "E0946", "handle": "a5af0ec0f4541dcef90", "media_list": [], "note_list": [], "place": "5HTJQCSB91P69HY731", "private": false, "profile": {"date": "1954-08-05", "place": "Ottawa, IL", "type": "Geburt"}, "tag_list": [], "type": "Birth"}, "object_type": "event", "rank": 17, "score": 11.21499428033326}, {"handle": "a5af0ebc97160055f8a", "object": {"attribute_list": [], "change": 1284030608, "citation_list": [], "date": {"calendar": 0, "dateval": [20, 12, 1810, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 2382502, "text": "", "year": 1810}, "description": "Birth of Gauthier, Julius", "gramps_id": "E0646", "handle": "a5af0ebc97160055f8a", "media_list": [], "note_list": [], "place": "13NKQCXLPDDSMXMVI", "private": false, "profile": {"date": "1810-12-20", "place": "Port Angeles, WA", "type": "Geburt"}, "tag_list": [], "type": "Birth"}, "object_type": "event", "rank": 18, "score": 11.201257161572121}, {"handle": "B9XKQCHTI5F44RRUEK", "object": {"address_list": [], "alternate_names": [], "attribute_list": [], "birth_ref_index": -1, "change": 1185438865, "citation_list": ["c140d25746e1c1f1244"], "death_ref_index": -1, "event_ref_list": [{"attribute_list": [], "note_list": [], "private": false, "ref": "a5af0ec440f101e4e77", "role": "Primary"}], "family_list": [], "gender": 1, "gramps_id": "I2040", "handle": "B9XKQCHTI5F44RRUEK", "lds_ord_list": [], "media_list": [], "note_list": [], "parent_family_list": ["H6XKQCTEKODM677XTB"], "person_ref_list": [], "primary_name": {"call": "", "citation_list": [], "date": {"calendar": 0, "dateval": [0, 0, 0, false], "format": null, "modifier": 0, "newyear": 0, "quality": 0, "sortval": 0, "text": "", "year": 0}, "display_as": 0, "famnick": "", "first_name": "Gerald L.", "group_as": "", "nick": "", "note_list": [], "private": false, "sort_as": 0, "suffix": "", "surname_list": [{"connector": "", "origintype": "", "prefix": "", "primary": true, "surname": "Hawkins"}], "title": "", "type": "Birth Name"}, "private": false, "profile": {"birth": {}, "death": {}, "handle": "B9XKQCHTI5F44RRUEK", "name_given": "Gerald L.", "name_surname": "Hawkins", "sex": "M"}, "tag_list": [], "urls": []}, "object_type": "person", "rank": 19, "score": 11.036291345137876}];

export const App = () =>
  html`
    <grampsjs-search-results .data=${searchResult} .strings=${strings}></grampsjs-search-results>
  `;
