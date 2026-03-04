from dataclasses import dataclass

@dataclass
class Agent:
    agent_id: int
    name: str
    region: str
    sales: float
    bonus_percentage: float
    bonus: float = field(init=False)

    def __post_init__(self):
        self.bonus = self.sales * self.bonus_percentage