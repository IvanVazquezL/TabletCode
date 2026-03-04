import csv
from Agent import Agent

class AgentRepository:
    def get_agents(self, path):
        agents = []
        with open(path) as f:
            reader = csv.DictReader(f)
            for row in reader:
                data = {
                    "agent_id": int(row["agent_id"]),
                    "name": row["name"],
                    "region": row["region"],
                    "sales": float(row["sales"]),
                    "bonus_percentage": float(row["bonus_percentage"])
                }

                agent = Agent(**data)
                agents.append(agent)
        return agents