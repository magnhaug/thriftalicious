struct Vare {
	1: required i64 id,
	2: optional string navn,
	3: required i64 varenummer
}

service Butikk {
	bool harVare(1: i64 id)
}
